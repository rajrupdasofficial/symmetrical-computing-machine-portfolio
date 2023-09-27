import React, { useEffect } from "react";
import "../assets/css/snowfall.scss";

const Snowfall: React.FC = () => {
  useEffect(() => {
    // Generate snowflakes and append them to the body
    const generateSnowflakes = () => {
      const snowflakeContainer = document.createElement("div");
      snowflakeContainer.className = "snowfall-container";
      document.body.appendChild(snowflakeContainer);

      const numberOfSnowflakes = 50; // Adjust the number of snowflakes
      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`;

        // Create the design of the snowflake using an asterisk (*)
        snowflake.innerHTML = "*";

        snowflakeContainer.appendChild(snowflake);
      }
    };

    generateSnowflakes();
  }, []);

  return null; // This component doesn't render anything in the DOM
};

export default Snowfall;
