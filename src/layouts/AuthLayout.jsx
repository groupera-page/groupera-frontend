import React from "react";
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet key="Outlet"/>
    </div>
  )
}

export default AuthLayout;
