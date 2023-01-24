import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./style/Theme";

import Home from "./pages/Home";


const App = () => {
  return (
    <>
    <Theme/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
