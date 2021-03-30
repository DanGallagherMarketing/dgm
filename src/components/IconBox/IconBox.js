import React from "react";
import * as classes from "./IconBox.module.css";

const IconBox = (props) => {
  return (
    <div className={classes.IconBox}>
      <img src={props.iconSrc} alt={props.iconAlt} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default IconBox;
