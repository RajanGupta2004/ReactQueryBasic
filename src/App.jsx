import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Home page</h1>
      <Link to={"/products"}>Products page</Link>
    </>
  );
}

export default App;
