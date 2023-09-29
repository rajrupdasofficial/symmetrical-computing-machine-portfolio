import React from "react";
import "../assets/css/buttontechstack.scss";
import { GrVirtualMachine } from "react-icons/gr";
import { TbBrandPython } from "react-icons/tb";
import { SiSparkpost } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiCreatereactapp } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const TechStack: React.FC = () => {
  return (
    <div className="tcontainer">
      <div className="techstack">
        <div className="toptech">
          <div className="top">
            <div className="tech1 icon-container">
              <p>
                <SiCreatereactapp size={40} />
              </p>
            </div>
          </div>
          <div className="top">
            <div className="tech2 icon-container">
              <p>
                <FaNode size={40} />
              </p>
            </div>
          </div>
          <div className="top">
            <div className="tech3 icon-container">
              <TbBrandPython size={40} />
            </div>
          </div>
          <div className="top">
            <div className="tech4 icon-container">
              <SiSparkpost size={40} />
            </div>
          </div>
        </div>
        <div className="bottomtech">
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <GrVirtualMachine size={40} />
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <SiNuxtdotjs size={40} />
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <SiGithub size={40} />
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <SiMongodb size={40} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
