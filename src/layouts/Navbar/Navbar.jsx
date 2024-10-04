import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ tab, setTab }) {
  return (
    <div className='navbar-container'>
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("home");
          }}
        >
          Home
        </button>
      </Link>

      <Link to={"/calculator"}>
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("calculator");
          }}
        >
          Calculator
        </button>
      </Link>

      <Link to={"/components"}>
        <button
          className={
            "btn " +
            (tab === "components" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("components");
          }}
        >
          Components
        </button>
      </Link>

      <Link to={"/todo"}>
        <button
          className={
            "btn " + (tab === "todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("todo");
          }}
        >
          Todo
        </button>
      </Link>

      <Link to={"/products"}>
        <button
          className={
            "btn " + (tab === "products" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("products");
          }}
        >
          Products
        </button>
      </Link>

      <Link to={"/carts"}>
        <button
          className={
            "btn " + (tab === "carts" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => {
            setTab("carts");
          }}
        >
          Carts
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
