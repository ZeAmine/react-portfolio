import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="main-wrap">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
