import React, { useEffect, useRef } from "react";
import softwareDevelopment from "../assets/images/software-development.png";
import Typed from "typed.js";
import NavBar from "./Nav";
import SecondSection from "./SecondSection";
import Footer from "./Footer";
import Layout from "./Layout";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
const Home: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Free-Lancer",
        "Web Designer",
        "Data Analyst",
        "MLOps",
        "Backend Engineer",
        "Node.js Developer",
      ],
      typeSpeed: 230,
      loop: true,
    });

    // Optionally, you can return a cleanup function if needed
    return () => {
      typed.destroy(); // Cleanup the Typed instance when the component unmounts
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <>
      <Layout title="Portfolio | Home Section">
        <main>
          <NavBar />
          <section className="firstSection">
            <div className="leftSection">
              Hi, My name is <span className="purple">Rajrup</span>
              <div>I am a Passionate</div>
              <span ref={el} className="purple"></span>
            </div>
            <div className="rightSection">
              <img src={softwareDevelopment} alt="softwaredevelopment" />
            </div>
          </section>
          <hr />
          <SecondSection />
          <hr />
          <section className="thirdSection">
            <ThirdSection />
          </section>
          <hr />
          <section className="fourthSection">
            <FourthSection />
          </section>
          <hr />
        </main>
        <Footer />
      </Layout>
    </>
  );
};
export default Home;
