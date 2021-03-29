import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import * as classes from "../styles/index.module.css";

const googleAds = ({ data }) => {
  return (
    <Layout title="Google Ads" hero={data.hero.childImageSharp.fluid}>
      <SEO title="Google Ads" />

      <section className={classes.Section}>
        <h2>My Process For Google Ads</h2>
        <h3>Keyword Research</h3>
        <p>
          I use the most effective keyword research methods to discover the most
          appropriate and profitable keywords for your campaigns.
        </p>
        <h3>Tracking</h3>
        <p>
          I track events on the landing page that indicate levels of interest.
        </p>
        <h3>Analytics</h3>
        <p>
          I observe what works and what doesn’t work. Anything that isn’t
          working is changed.
        </p>
        <h3>Reporting</h3>
        <p>
          You receives updates on the performance of your campaign with
          commentary on next actions to take.
        </p>
      </section>
    </Layout>
  );
};

export default googleAds;

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
