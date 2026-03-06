import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import GlobalError from "./components/GlobalError";
import Regiter from "./components/Regiter";
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Regiter />} />
          <Route path="*" element={<GlobalError/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
