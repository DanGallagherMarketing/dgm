import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../components/Form/Form";
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
          digital marketer, managing Google Ads campaigns.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>What Makes Me Different</h2>
        <h3>I'm Also A Web Developer</h3>
        <p>
          I have experience with full stack web development, and my workflow
          involves using hyper-modern technologies (JAMstack with GatsbyJS) to
          create blazing fast pages.
        </p>
        <h3>I Am Experienced As A Data Analyst</h3>
        <p>
          I'm very comfortable using data vizualisation technologies (Google
          Data Studio and Microsoft Power BI) to produce beautiful bespoke
          reports for Google Ads.
        </p>
      </section>

      <section className={classes.Section}>
        <h2>Book A Free Consultation</h2>
        <Form />
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
