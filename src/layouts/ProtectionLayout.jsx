import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, Navigate} from "react-router-dom";

import {refreshToken, selectAuth} from "../features/auth/authSlice";

export const DefaultLoadingPage = () => (
  <div>
    Loading…
  </div>
)

const ProtectionLayout = ({protect=true}) => {
  const {token, loading} = useSelector(selectAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      dispatch(refreshToken())
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <DefaultLoadingPage/>
  }

  if (protect && !token) { // meant for protected routes, if user needs to be logged in
    return <Navigate to="/auth/login" replace={true}/>
  }

  if (!protect && token) { // meant for auth routes, if user is already logged in
    return <Navigate to="/" replace={true}/>
  }

  return <Outlet key="Outlet"/>
}

export default ProtectionLayout
