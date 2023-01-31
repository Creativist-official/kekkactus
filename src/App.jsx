import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./style/Theme";
import OnlyMobile from "./style/OnlyMobile";
import Garden from "./pages/Garden";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingolaPianta from "./pages/SingolaPianta";

const App = () => {
  return (
    <>
      <Theme>
        <OnlyMobile>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/piante" element={<SingolaPianta />} />
              <Route path="*" element={<h1>404</h1>} />
              <Route path="/garden" element={<Garden/>}/>
            </Routes>
          </BrowserRouter>
        </OnlyMobile>
      </Theme>
    </>
  );
};

export default App;
