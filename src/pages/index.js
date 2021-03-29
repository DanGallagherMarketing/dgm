import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import * as classes from "../styles/index.module.css";

const Home = ({ data }) => {
  return (
    <Layout
      title="Freelance Digital Marketer"
      hero={data.hero.childImageSharp.fluid}
    >
      <SEO title="Dan Gallagher Marketing" />

      <section className={classes.Section}>
        <h2>An Affordable, Transparent Freelancer</h2>
      </section>
      <section className={classes.Section}>
        <h2>About Me</h2>
        <p>
          I'm a 24 year old freelancer, currently looking to take on new
          clients.  Quality of service is my priority, and my ever-expanding
          skill set allows me to do it better than most.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>Case Studies</h2>
      </section>
      <section className={classes.Section}>
        <h2>How To Begin Working With Me</h2>
        <ol>
          <li>
            You schedule a free consultation (or you can ask a question by
            submitting an enquiry)
          </li>
          <li>
            We discuss your situation and what exactly you want me to help you
            with
          </li>
          <li>
            I send over a detailed proposal containing all the information you
            need to make a decision
          </li>
          <li>
            If you are not happy with the proposal, I will send over an amended
            proposal
          </li>
          <li>
            Once you are happy, you sign the contract included in the proposal
          </li>
        </ol>
      </section>
      <section className={classes.Section}>
        <h2>Book A Free Consultation</h2>
        <p>Insert Form Here</p>
      </section>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
