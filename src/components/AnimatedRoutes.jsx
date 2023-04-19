import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Animation from "../components/Animation";
import Home from "../components/Home";
import Illustration from "../components/Illustration";
import Modeling3d from "../components/Modeling3d";
import Programming from "../components/Programming";
import Login from "../components/Login";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/3dmodeling" element={<Modeling3d />} />
        <Route path="/register" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}
