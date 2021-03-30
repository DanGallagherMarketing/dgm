import React, { useState, Children } from "react";
import * as classes from "./ComponentCarousel.module.css";
const ComponentCarousel = (props) => {
  const cellSize = 350;
  const cellCount = Children.count(props.children);

  const translateZ = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));

  const [style, setStyle] = useState({
    transform: `translateZ(-${translateZ}px) rotateY(0deg)`,
  });

  const [index, setIndex] = useState(0);

  const rotateCarousel = (direction) => {
    const angle = (index / cellCount) * -360;
    console.log(index);
    setStyle({
      transform: `translateZ(-${translateZ}px) rotateY(${angle}deg)`,
    });
    setIndex(direction === "l" ? index - 1 : index + 1);
  };

  return (
    <div className={classes.CarouselContainer}>
      <div style={style} className={classes.ComponentCarousel}>
        {props.children.map((child) => (
          <div className={classes.CarouselCell}>{child}</div>
        ))}
      </div>
      <div className={classes.ButtonContainer}>
        <button
          className={classes.CarouselNavButton}
          onClick={() => rotateCarousel("l")}
        >
          Previous
        </button>
        <button
          className={classes.CarouselNavButton}
          onClick={() => rotateCarousel("r")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComponentCarousel;
