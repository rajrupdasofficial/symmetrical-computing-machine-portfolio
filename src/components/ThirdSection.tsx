import React from "react";
import "../assets/css/card.scss";
import developer from "../assets/images/coder.jpeg";
// import coder from "../assets/images/ml.png";
import hh from "../assets/images/developer_m.png";

const ThirdSection: React.FC = () => {
  return (
    <>
      <section className="thirdSection">
        <div className="playarea">
          <span className="textgrey">Play Area</span>

          <h1>
            Play with 3d cards
            <span className="grview">Upload 3 pictures and test</span>
          </h1>
        </div>
        <div className="card">
          <div className="wrapper">
            <img src={developer} className="cover-image" />
          </div>
          <img src="" className="title" />
          <img src={hh} className="character" />
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
