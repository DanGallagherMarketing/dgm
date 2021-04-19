import React from "react";
import { Link } from "gatsby";
import * as classes from "./CaseStudyCard.module.css";
import Img from "gatsby-image";

const CaseStudyCard = (props) => {
  return (
    <div className={classes.CaseStudyCard}>
      <div className={classes.Image}>
        <Img fluid={props.fluid} />
      </div>
      <div className={classes.Info}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <Link to={props.link}>
          <button type="button">Read Case Study</button>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
