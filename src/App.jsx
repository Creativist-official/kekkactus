import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./style/Theme";
import OnlyMobile from "./style/OnlyMobile";

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
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </OnlyMobile>
      </Theme>
    </>
  );
};

export default App;
