import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../components/Form/Form";
import * as classes from "../styles/index.module.css";

const contact = ({ data }) => {
  return (
    <Layout title="Contact" hero={data.hero.childImageSharp.fluid}>
      <SEO title="Contact" />
      <section className={classes.Section}>
        <h2>Book A Free Consultation</h2>
        <Form />
      </section>
    </Layout>
  );
};

export default contact;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "contact.webp" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
