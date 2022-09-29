import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Banner from "./pages/Banner";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

import { useAuth0 } from "@auth0/auth0-react";
import Map from "./pages/Map";
import { useSelector } from "react-redux";

function RoutesApp() {
  const [stateAuth, setStateAuth] = useState();
  const { isAuthenticated } = useAuth0();
  const isAuth = useSelector((state) => state.loginReducer.isAuthenticated);


  return (
    <div>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={!isAuth ? <Banner /> : <Navigate to="dashboard" />}
          />
          <Route
            path="dashboard"
            element={isAuth ? <Layout /> : <Navigate to="/" />}
          >
            <Route index element={<Dashboard />} />
            <Route path="map" element={<Map />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default RoutesApp;
