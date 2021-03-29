import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import * as classes from "../styles/index.module.css";

const about = ({ data }) => {
  return (
    <Layout title="About Me" hero={data.hero.childImageSharp.fluid}>
      <SEO title="About Me" />

      <section className={classes.Section}>
        <h2>Hi, I'm Dan</h2>
        <p>
          In 2017 I graduated from the University of Surrey with a 1st class
          honours degree in Economics. Since November 2017, I have worked as a
          digital marketer, managing Google and Facebook ads campaigns. I
          specialise in Pay Per Click marketing on Facebook and Google, as well
          as landing page design.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>What Makes Me Different</h2>
        <p>
          I am also a full stack web developer, meaning I can create bespoke,
          blazing fast landing pages without the design limitations that come
          with block web builders. For those who know a thing or two about web
          development, my preferred stack is MERN/PERN, and I also have
          experience using the Gastby.js react framework and serverless. I also
          have years of experience working with data visualisation tools
          (Microsoft Power BI and Google Data Studio).
        </p>
      </section>

      <section className={classes.Section}>
        <h2>Book A Free Consultation</h2>
        <p>Insert Form Here</p>
      </section>
    </Layout>
  );
};

export default about;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "about-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
