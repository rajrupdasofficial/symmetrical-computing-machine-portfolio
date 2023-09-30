import React, { useEffect, useState } from "react";
import softwareDevelopment from "../assets/images/software-development.png";
import NavBar from "./Nav";
import SecondSection from "./SecondSection";
import Footer from "./Footer";
import Layout from "./Layout";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import TechStack from "./ButtonTechStack";
import "../assets/css/loader.scss";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate a 5-second loading time (adjust as needed)
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Layout title="Portfolio | Home Section">
          <main>
            <NavBar />
            <section className="firstSection">
              <div className="leftSection">
                Hi, My name is
                <span className="purple">Rajrup</span>
                <div>I am a Passionate</div>
                <span className="mxxu">Programmer</span>
              </div>
              <div className="rightSection">
                <img src={softwareDevelopment} alt="softwaredevelopment" />
              </div>
            </section>
            <hr />
            <section className="techsection">
              <TechStack />
            </section>
            <hr />
            <SecondSection />
            <hr />

            <ThirdSection />

            <hr />
            <section className="fourthSection">
              <FourthSection />
            </section>
            <hr />
          </main>
          <Footer />
        </Layout>
      )}
    </>
  );
};

export default Home;
