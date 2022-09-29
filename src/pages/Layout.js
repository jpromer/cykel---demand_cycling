import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/Nabvar/NavMenu";

export default function Layout() {
  return (
    <div className="layout_app">
      <NavMenu />
      <Outlet />
    </div>
  );
}
