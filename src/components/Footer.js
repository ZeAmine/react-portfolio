import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const scrollBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-wrap container">
        <div className="footer-credit">
          <h4>COPYRIGHT © 2021 – AMINE ZEGMOU</h4>
        </div>
        <button className="footer-scroll hover" onClick={scrollBack}>
          <span>HAUT DE PAGE</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
