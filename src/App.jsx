import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/menu" element={<Menu />}/>
    </Routes>
  );
}

export default App;
