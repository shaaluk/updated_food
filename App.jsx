import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
// import Navbar from "./component/Navbar";
// import Basket from "./component/Basket";
// import Main from "./component/Main";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import products from "./component/Pro";
import Home from "./container/Home";
// import data from "./component/products";
// import Product from "./component/Product";



function App(){
  return (

    <Routes>
    <Route path="/about" Component={About}/>
    <Route path="/contact" Component={Contact}/>
    <Route path="/" Component={Home}/>
    </Routes>
  
  );
}

export default App;