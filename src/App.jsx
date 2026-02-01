import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Unidades from "./pages/Unidades"; // import da nova página

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unidades" element={<Unidades />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
