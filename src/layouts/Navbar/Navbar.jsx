import "./Navbar.css";

function Navbar({ tab, setTab }) {
  return (
    <div className="navbar-container">
      <button
        className={
          "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
        }
      >
        Home
      </button>
      <button className="btn btn-primary">Todo</button>
    </div>
  );
}

export default Navbar;
