import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { QueryClient, QueryClientProvider } from "react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Paginated from "./pages/Paginated.jsx";
import Dependent from "./pages/Dependent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/paginated",
    element: <Paginated />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
  {
    path: "/dependent-query",
    element: <Dependent />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
