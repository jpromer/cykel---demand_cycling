import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Banner from "./pages/Banner";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

import { useAuth0 } from "@auth0/auth0-react";
import Map from "./pages/Map";

function RoutesApp() {
  const [stateAuth, setStateAuth] = useState();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setStateAuth(isAuthenticated);
    }
  }, [isAuthenticated]);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={!stateAuth ? <Banner /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={stateAuth ? <Layout /> : <Navigate to="/" />}
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
