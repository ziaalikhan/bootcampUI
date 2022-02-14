import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
// import { Sidebar, Home } from "./index.js";

const App = () => {
  return (
    <div className="app">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="home">
        <Home />
      </div>
    </div>
  );
};

export default App;
