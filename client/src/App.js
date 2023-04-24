import React from "react";
import './styles/style.css';
import './styles/resumeStyle.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// --Views--
import Home from "./views/Home";
import About from "./views/About";
import Resume from "./views/Resume";


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element = {<About />} path="/about" />
        <Route element = {<Resume />} path="/resume" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
