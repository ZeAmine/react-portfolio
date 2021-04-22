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
          <h4>© 2021 – AMINE ZEGMOU</h4>
        </div>
        <button className="footer-scroll hover" onClick={scrollBack}>
          <span>RETOUR EN HAUT</span>
          {/*<svg*/}
          {/*  width="22"*/}
          {/*  height="22"*/}
          {/*  viewBox="0 0 31.03 26"*/}
          {/*  fill="none"*/}
          {/*  xmlns="http://www.w3.org/2000/svg"*/}
          {/*>*/}
          {/*  <path*/}
          {/*    d="M16,24l2,2L31,13l-13-13L16,2l9.59,9.59H0v2.82H25.45Z"*/}
          {/*    fill="white"*/}
          {/*    transform="matrix(1,0,0,1,0,0)"*/}
          {/*    style={{ transformOrigin: "0px 0px; opacity: 1" }}*/}
          {/*  />*/}
          {/*</svg>*/}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
