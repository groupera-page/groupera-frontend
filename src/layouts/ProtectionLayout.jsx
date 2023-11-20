import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, Navigate} from "react-router-dom";

import {refreshToken, selectAuth} from "../features/auth/authSlice";

const DefaultLoadingPage = () => (
  <div>
    Loading…
  </div>
)

const ProtectionLayout = () => {
  const {token, loading} = useSelector(selectAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      dispatch(refreshToken())
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return loading ?
    <DefaultLoadingPage/>
    : token ?
      <Outlet key="Outlet"/>
      :
      <Navigate to="/auth/login" replace={true}/>
}

export default ProtectionLayout
