import React from "react";
import "../assets/css/techstack.scss";
import { GrVirtualMachine } from "react-icons/gr";
import { TbBrandPython } from "react-icons/tb";
import { SiSparkpost } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiCreatereactapp } from "react-icons/si";
const TechStack: React.FC = () => {
  return (
    <>
      <div className="seperator">
        <div className="spex">
          <span className="textgrey">Technologies</span>
        </div>
        <div className="container">
          <div className="tree-card">
            <div className="tree-node top-node">
              <div className="icon node-icon">
                <GrVirtualMachine />
              </div>
              <h1>Machine Learning</h1>
            </div>
            <div className="tree-node middle-node">
              <div className="icon node-icon">
                <TbBrandPython />
              </div>
              <h2>Python</h2>
            </div>
            <div className="tree-node middle-node">
              <div className="icon node-icon">
                <SiSparkpost />
              </div>
              <h2>Django</h2>
            </div>
            <div className="tree-node bottom-node">
              <div className="icon node-icon">
                <FaNode />
              </div>
              <h2>Node.js</h2>
            </div>
            <div className="tree-node bottom-node">
              <div className="icon node-icon">
                <SiCreatereactapp />
              </div>
              <h2>React</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
