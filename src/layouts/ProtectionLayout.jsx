import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import {
  isAuthenticated,
  refreshToken,
  selectAuth,
} from "../features/auth/authSlice";

export const DefaultLoadingPage = () => (
  <div className="flex justify-center items-center p-10">
    <div className="animate-spin rounded-full border-t-4 border-PURPLE_PRIMARY border-solid h-12 w-12 mr-3"></div>
    <h3>Laden...</h3>
  </div>
);

const ProtectionLayout = ({ protect = true }) => {
  const { token, loading } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      if (protect) {
        dispatch(refreshToken());
      } else {
        dispatch(isAuthenticated());
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <DefaultLoadingPage />;
  }

  if (protect && !token) {
    // meant for protected routes, if user needs to be logged in
    return <Navigate to="/auth/login" replace={true} />;
  }

  if (!protect && token) {
    // meant for auth routes, if user is already logged in
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet key="Outlet" />;
};

export default ProtectionLayout;
