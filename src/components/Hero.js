import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrap container">
        <div className="hero-title title-1">
          <h1>AMINE</h1>
        </div>
        <div className="hero-title title-2">
          {/*<div className="hero-title-wrap">*/}
          {/*  <span>HETIC 2021</span>*/}
          {/*</div>*/}
          <h1>
            DÉVELOPPEUR <br /> FRONT-END
          </h1>
        </div>
        <div className="hero-title title-3">
          <h1>ZEGMOU</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
