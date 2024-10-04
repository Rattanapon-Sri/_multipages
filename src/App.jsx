import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Layout from "./layouts/Layout/Layout";

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

  useEffect(() => {
    setTab(intTab);
  }, []); //first load
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route element={<Layout tab={tab} setTab={setTab} />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/todo"} element={<Todo />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
