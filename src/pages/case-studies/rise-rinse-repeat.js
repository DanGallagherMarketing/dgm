import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../components/Layout/Layout";
import { graphql, Link } from "gatsby";
import Form from "../../components/Form/Form";
import * as classes from "../../styles/index.module.css";
import "../../styles/posts.css";
const CaseStudy = ({ data }) => {
  return (
    <Layout
      title="Landing Page Design - Rise Rinse Repeat"
      hero={data.hero.childImageSharp.fluid}
    >
      <SEO title="Landing Page Design - Rise Rinse Repeat" />

      <section className={classes.IframeSection}>
        <h2>View their landing page below!</h2>

        <iframe
          src="https://riserinserepeat.com/unearthing-yourself"
          style={{ width: "100%", height: "800px" }}
        />
      </section>

      <section className={classes.Section}>
        <h2>Book A Free Consultation</h2>
        <Form />
      </section>
    </Layout>
  );
};

export default CaseStudy;
export const query = graphql`
  query {
    hero: file(relativePath: { eq: "landing-page-design.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
