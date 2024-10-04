import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
