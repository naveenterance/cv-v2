import React, { useState } from "react";
import "animate.css";
const HoverAnimation = () => {
  const [animate, setAnimate] = useState(false);

  const handleHover = () => {
    setAnimate(!animate);
  };

  const animationClass = animate ? "animate__animated animate__bounce" : "";

  return (
    <div
      className={animationClass}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      asdasdas
    </div>
  );
};
