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
        <section className="dessec">
          <div className="below">
            <div className="boxx">
              <div className="cardp">
                <div className="descrip">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit nisi neque iure praesentium in, laudantium itaque
                    necessitatibus doloremque enim ratione facilis veniam
                    similique facere sed, omnis porro quisquam blanditiis
                    tenetur!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    </>
  );
};

export default About;
