import React, { useEffect } from "react";
import "../styles/Navbar.css";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { theme, switchTheme } = useGlobalContext();

  useEffect(() => {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "default");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  return (
    <header className="header">
      <nav className="header-wrap container">
        <div className="header-logo">
          <svg
            id="logo"
            width="32"
            height="32"
            viewBox="0 0 98.56 148.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logo-2" data-name="logo">
              <path
                d="M79.64.08H0V19H79.64V129.66H68.2V49.36H0v99.22H98.56V.08ZM18.92,129.66V68.29H49.28v61.37Z"
                transform="translate(0 -0.08)"
              />
            </g>
          </svg>
          <div className="header-logo-wrap">
            <h4>AMINE ZEGMOU</h4>
          </div>
        </div>
        <ul className="header-list">
          <li className="header-item">
            <p className="hover">PROJETS</p>
          </li>
          <li className="header-item">
            <p className="hover">CONTACT</p>
          </li>
          <li className="header-item">
            <button
              className="header-switch"
              onClick={switchTheme}
              style={{
                transform: theme ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6V26Z"
                  fill="white"
                  transform="matrix(1,0,0,1,0,0)"
                  style={{ transformOrigin: "0px 0px;" }}
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
