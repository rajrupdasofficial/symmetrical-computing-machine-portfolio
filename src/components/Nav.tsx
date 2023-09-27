import React from "react";
import "../assets/css/master.scss";
import { HiMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/");
  };

  const aboutClick = () => {
    navigate("/about");
  };

  return (
    <header>
      <nav>
        <div className="left">Rajrup.dev</div>
        <div className="right">
          <ul>
            <li>
              <Link to="/" onClick={homeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={aboutClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <a href="#" className="menu">
            <HiMenu />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
