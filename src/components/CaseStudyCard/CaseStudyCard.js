import React from "react";
import { Link } from "gatsby";
import * as classes from "./CaseStudyCard.module.css";
import Img from "gatsby-image";

const CaseStudyCard = (props) => {
  console.log(props.fluid);
  return (
    <div className={classes.CaseStudyCard}>
      <Img fluid={props.fluid} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Link to={props.href}>
        <button type="button">Read Case Study</button>
      </Link>
    </div>
  );
};

export default CaseStudyCard;
