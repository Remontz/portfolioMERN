import React from "react";
import './styles/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// --Views--
import Home from "./views/Home";
import About from "./views/About";
// import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element = {<About />} path="/about" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
