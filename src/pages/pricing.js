import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../components/Form/Form";
import * as classes from "../styles/index.module.css";

const pricing = ({ data }) => {
  return (
    <Layout title="Pricing" hero={data.hero.childImageSharp.fluid}>
      <SEO title="Pricing" />

      <section className={classes.Section}>
        <h2>My Pricing Structure</h2>
        <p>
          My Pricing Structure I currently have space to take on: 2 more clients
          If you are interested in working with me, submit an enquiry below.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>PPC (Facebook / Google Ads)</h2>
        <p>Pricing can vary, but the typical monthly fee is £800.</p>
        <h2>Landing Page Object</h2>
        <p>Pricing can vary, but the typical fee is £300.</p>
      </section>
      <section className={classes.Section}>
        <h2>Book A Free Consultation</h2>
        <Form />
      </section>
    </Layout>
  );
};

export default pricing;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "pricing.webp" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
