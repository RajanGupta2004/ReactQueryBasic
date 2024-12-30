import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const params = useParams();
  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );

    const data = await res.json();
    return data;
  };

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", params.productId],
    queryFn: fetchProducts,
  });

  const mutation = useMutation({
    mutationFn: async (newProduct) => {
      await axios.put(
        `https://dummyjson.com/products/${params.productId}`,
        newProduct
      );
    },
  });

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>Error {error.message}</h1>;
  }

  return (
    <div>
      <h1>single product page...</h1>
      <h1>Product Name {product?.title}</h1>

      <button
        onClick={() => mutation.mutate({ title: "hello " })}
        className="border p-2 bg-slate-300 rounded m-10"
      >
        update post
      </button>
    </div>
  );
};

export default Product;
