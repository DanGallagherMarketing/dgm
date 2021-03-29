import React from "react";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className, src, title }) => {
  return (
    <BackgroundImage Tag="div" className={className} fluid={src}>
      <h1 style={{ color: "white" }}>{title}</h1>
    </BackgroundImage>
  );
};

export default BackgroundSection;
