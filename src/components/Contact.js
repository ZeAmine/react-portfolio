import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="pre-title container">
        <h2>CONTACT</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-inner container">
        <div className="contact-col-1">
          <p>
            Marshmallow icing apple pie gingerbread dragée croissant. Jelly-o
            bear claw fruitcake topping dessert liquorice wafer. Caramels
            tootsie roll croissant tootsie roll. Lollipop chupa chups caramels
            chupa chups. Macaroon oat cake chocolate bar toffee. Sweet roll
          </p>
        </div>
        <div className="contact-col-2">
          <ul className="contact-social">
            <li className="social">
              <a
                href="https://www.linkedin.com/in/zeamine"
                target="_blank"
                className="social-item hover"
              >
                <p>LINKEDIN</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 31.03 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16,24l2,2L31,13l-13-13L16,2l9.59,9.59H0v2.82H25.45Z"
                    fill="white"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{ transformOrigin: "0px 0px; opacity: 1" }}
                  />
                </svg>
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.twitter.com/AmineZegmou"
                target="_blank"
                className="social-item hover"
              >
                <p>TWITTER</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 31.03 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16,24l2,2L31,13l-13-13L16,2l9.59,9.59H0v2.82H25.45Z"
                    fill="white"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{ transformOrigin: "0px 0px; opacity: 1" }}
                  />
                </svg>
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.github.com/ZeAmine"
                target="_blank"
                className="social-item hover"
              >
                <p>GITHUB</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 31.03 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16,24l2,2L31,13l-13-13L16,2l9.59,9.59H0v2.82H25.45Z"
                    fill="white"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{ transformOrigin: "0px 0px; opacity: 1" }}
                  />
                </svg>
              </a>
            </li>
            <li className="social">
              <a
                href="mailto:zegmou.amine@gmail.com"
                target="_blank"
                className="social-item hover"
              >
                <p>EMAIL</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 31.03 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16,24l2,2L31,13l-13-13L16,2l9.59,9.59H0v2.82H25.45Z"
                    fill="white"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{ transformOrigin: "0px 0px; opacity: 1" }}
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
