import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/Footer";

function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <div className="App" alt='rapilogo' >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
    <div className="Footer">
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
