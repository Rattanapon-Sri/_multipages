import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Components from "./pages/Components/Components";
import Todo from "./pages/Todo/Todo";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";

import { fetchProducts } from "./data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import "./App.css";

// HashRouter , BrowserRouter , MemoryRouter
//localhost:5173/#/<path>    //HashRouter **compatable old
//http://localhost:5173/<path>   //BrowserRouter *production
//http://localhost:5173   //MemoryRouter

// App -> layout -> Navbar (buttons)
// tab -> (props)
const intTab = "home";

function App() {
  const [tab, setTab] = useState("");
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setTab(intTab);
    setProducts(fetchProducts());
  }, []); //first load

  useEffect(() => console.log(products), [products]);

  return (
    <div className='app-container'>
      <HashRouter>
        <Routes>
          <Route
            element={
              <Layout
                tab={tab}
                setTab={setTab}
                products={products}
                carts={carts}
              />
            }
          >
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/calculator"} element={<Calculator />} />
            <Route path={"/components"} element={<Components />} />
            <Route
              path={"/products"}
              element={
                <Products
                  products={products}
                  carts={carts}
                  setCarts={setCarts}
                />
              }
            />
            <Route
              path={"/carts"}
              element={<Carts carts={carts} setCarts={setCarts} />}
            />
            <Route path={"/todo"} element={<Todo />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
