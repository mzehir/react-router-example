import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTER_ENUM } from "./enums/routerEnum";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTER_ENUM.DASHBOARD.path} element={<Dashboard />} />
      <Route path={ROUTER_ENUM.HOME.path} element={<Home />} />
      <Route path={ROUTER_ENUM.ABOUT.path} element={<About />} />
      <Route path={ROUTER_ENUM.CONTACT.path} element={<Contact />} />
    </Routes>
  );
};
