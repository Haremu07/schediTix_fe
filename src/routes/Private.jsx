import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { UserContext } from "../global/Contex";

const Private = () => {
  const { userToken } = useContext(UserContext);
  console.log(userToken)
  const userData = JSON.parse(localStorage.getItem("userData"));
  const location = useLocation();

  return userData?.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default Private;
