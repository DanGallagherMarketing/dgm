import React, { useState, Children } from "react";
import * as classes from "./ComponentCarousel.module.css";
const ComponentCarousel = (props) => {
  const cellSize = 350;
  const cellCount = Children.count(props.children);

  const translateZ = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
  console.log(translateZ);

  const [style, setStyle] = useState({
    transform: `translateZ(-${translateZ}px) rotateY(0deg)`,
  });

  const [index, setIndex] = useState(0);

  const rotateCarousel = (direction) => {
    const newIndex = direction === "l" ? index - 1 : index + 1;
    setIndex(newIndex);
    const angle = (newIndex / cellCount) * -360;

    setStyle({
      transform: `translateZ(-${translateZ}px) rotateY(${angle}deg)`,
    });

    console.log(index);
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
