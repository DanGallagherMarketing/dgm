import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../../components/Form/Form";
import * as classes from "../../styles/index.module.css";

const facebookAds = ({ data }) => {
  return (
    <Layout title="Facebook Ads" hero={data.hero.childImageSharp.fluid}>
      <SEO title="Facebook Ads" />

      <section className={classes.Section}>
        <h2>Overview</h2>
        <p>
          Facebook has over 2 billion users, making it the most scalable
          marketing platform. There is a large portion of potential customers
          who would use your product/service, but aren’t directly looking for
          it. Facebook advertising allows you to reach these people, as well as
          re-engaging with people who have already visited your website. If you
          target the correct audience, Facebook ads can provide a great return
          on investment.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>My Process For Facebook Ads</h2>
        <h3>Campaign Creation</h3>
        <p>
          We create a targeted campaign to encourage people to visit a landing
          page.
        </p>
        <h3>Tracking</h3>
        <p>
          We track events on the landing page that indicate varying levels of
          interest.
        </p>
        <h3>Remarketing</h3>
        <p>
          We launch a remarketing campaign to advertise to people who showed
          interest but did not convert.
        </p>
        <h3>Reporting</h3>
        <p>
          You receives updates on the performance of your campaign with
          commentary on next actions to take.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>Book A Free Consultation</h2>
        <Form />
      </section>
    </Layout>
  );
};

export default facebookAds;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "facebook-ads.webp" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
