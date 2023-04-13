import React from "react";
import { Routes, Route, NavLink, BrowserRouter, HashRouter } from "react-router-dom";
import Animation from "../components/Animation";
import Home from "../components/Home";
import Illustration from "../components/Illustration";
import Modeling3d from "../components/Modeling3d";
import Programming from "../components/Programming";

export default function Menu() {
  const navMenu = () => {
    const menu_toggle = document.querySelector(".x-Btn");
    const menu = document.querySelector(".menu");
    const navigation = document.querySelector(".nav");

    menu_toggle.classList.toggle("active");
    menu.classList.toggle("active");
    navigation.classList.toggle("active");
    // navigation.classList.remove('active')
  };

  const hideMenu = () => {
    const navigationHide = document.querySelector(".nav");
    // const LiHide = document.querySelector
    navigationHide.classList.remove("active");
  };

  return (
    <>
      <HashRouter>
        <header>
          <div className="menuBtn">
            <div className="x-Btn" onClick={navMenu}></div>
          </div>

          <nav className="nav">
            <ul className="menu">
              <li className="hideLink" onClick={hideMenu}>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="hideLink" onClick={hideMenu}>
                <NavLink
                  to="/programming"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Programming
                </NavLink>
              </li>
              <li className="hideLink" onClick={hideMenu}>
                <NavLink
                  to="/animation"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Animation
                </NavLink>
              </li>
              <li className="hideLink" onClick={hideMenu}>
                <NavLink
                  to="/illustration"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Illustration
                </NavLink>
              </li>
              <li className="hideLink" onClick={hideMenu}>
                <NavLink
                  to="/3dmodeling"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  3D
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Routes>
            <Route>
              <Route path="/" exact element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/programming" element={<Programming />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/illustration" element={<Illustration />} />
              <Route path="/3dmodeling" element={<Modeling3d />} />
            </Route>
          </Routes>
        </section>
      </HashRouter>
    </>
  );
}
