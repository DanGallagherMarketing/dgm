import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import * as classes from "../styles/index.module.css";

const contact = ({ data }) => {
  return (
    <Layout title="Contact" hero={data.hero.childImageSharp.fluid}>
      <SEO title="Contact" />
    </Layout>
  );
};

export default contact;

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
