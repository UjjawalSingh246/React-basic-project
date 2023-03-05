import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar";
import Home from './component/Home';
import About from './component/About';
import Gallary from './component/Gallary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallary" element={<Gallary />} />
        </Route>
      </Routes>
  </BrowserRouter>

  );
}

export default App;
