import React from "react";
import "../assets/css/mobilenav.scss";
const NavMobile: React.FC = () => {
  return (
    <ul className="nav-mobile">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Services</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};
export default NavMobile;
