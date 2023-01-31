import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./logic/store";

import Theme from "./style/Theme";
import OnlyMobile from "./style/OnlyMobile";
import Garden from "./pages/Garden";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Theme>
        <OnlyMobile>
          <Provider store={store}>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/garden" element={<Garden />} />
              <Route path="/recover-password" element={<h1>Ricordatela.</h1>} />
              <Route path="/home" element={<Navigate to="/"/>} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
          </Provider>
        </OnlyMobile>
      </Theme>
    </>
  );
};

export default App;
