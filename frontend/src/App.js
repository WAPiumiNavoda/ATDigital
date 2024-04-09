import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Footer from "./Footer";

const App = () => {
  

  return (
    <BrowserRouter>
       <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </main>
 <Footer />
    </BrowserRouter>
  );
};

export default App;
