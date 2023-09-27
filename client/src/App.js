import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/Footer";
import ReviewPage from "./components/review/ReviewPage";
import LoginPage from "./components/auth/LoginPage";
import CarPage from "./components/car/CarPage";

function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <div className="App" >
      <Routes>
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/rent" element={<CarPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
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
