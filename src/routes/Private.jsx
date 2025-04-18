import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { UserContext } from "../global/Contex";

const Private = () => {
  const { userToken } = useContext(UserContext);
  console.log(useContext(UserContext))
  const location = useLocation();

  return userToken && userToken!=="" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default Private;
