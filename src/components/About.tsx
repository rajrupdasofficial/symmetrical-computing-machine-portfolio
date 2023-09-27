import React from "react";
import NavBar from "./Nav";
import "../assets/css/about.scss";
import coder from "../assets/images/coder.jpeg";
import Layout from "./Layout";
import Footer from "./Footer";

const About: React.FC = () => {
  return (
    <>
      <Layout title="About Page | Rajrup.dev about page | check about me">
        <NavBar />
        <header className="abouttop">
          <div className="aboutme">About Me :</div>
        </header>
        <section className="firstabout">
          <div className="circular--landscape">
            <img src={coder} alt="coder" />
          </div>
          <div className="rightabout">
            <p>
              My Name is Rajrup Das
              <span className="leamon">
                I am a professional Fullstack Engineer
              </span>
            </p>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default About;
