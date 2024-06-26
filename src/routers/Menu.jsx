import React, { useEffect, useState } from "react";
import { NavLink, HashRouter } from "react-router-dom";

import AnimatedRoutes from "../components/AnimatedRoutes";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const threshold = 10; // adjust as needed
    const menu_toggle = document.querySelector(".x-Btn");
    menu_toggle.classList.remove("active");
    setShowMenu(scrollTop <= threshold);
  };

  const navMenu = () => {
    const menu_toggle = document.querySelector(".x-Btn");
    const menu = document.querySelector(".menu");
    const navigation = document.querySelector(".nav");

    menu_toggle.classList.toggle("active");
    menu.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  const hideMenu = () => {
    const navigationHide = document.querySelector(".nav");
    const menu_toggle = document.querySelector(".x-Btn");
    // const LiHide = document.querySelector
    navigationHide.classList.remove("active");
    menu_toggle.classList.remove("active");
  };

  return (
    <>
      <HashRouter>
        <header>
          <div className="menuBtn">
            <div className="x-Btn" onClick={navMenu}></div>
          </div>
          {showMenu && (
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
                    Programming / UX
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
                {/* <li className="hideLink" onClick={hideMenu}>
                  <NavLink
                    to="/illustration"
                    className={({ isActive }) => (isActive ? "activated" : "")}
                  >
                    Illustration
                  </NavLink>
                </li> */}
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
          )}
        </header>
        <section>
          <AnimatedRoutes />
        </section>
      </HashRouter>
    </>
  );
}
