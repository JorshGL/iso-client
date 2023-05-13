import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import Instructor from "../screens/Instructor";
import Calendar from "../screens/Calendar";

const Router = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Layout element={<Home />} />} />
            <Route
              path="/monitoria/:userId"
              element={<Layout element={<Instructor />} />}
            />
            <Route
              path="/calendar"
              element={<Layout element={<Calendar />} />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </>
  );
};

export default Router;
