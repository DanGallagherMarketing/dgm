import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import * as classes from "../styles/index.module.css";

const landingPageDesign = ({ data }) => {
  return (
    <Layout title="Landing Page Design" hero={data.hero.childImageSharp.fluid}>
      <SEO title="Landing Page Design" />

      <section className={classes.Section}>
        <h2>Overview</h2>
        <p>
          A landing page is a page designed with the intention of it being the
          first page that a visitor sees. In advertising campaigns, a landing
          page is specifically for the purpose of getting someone to take an
          action e.g. to submit their contact details. Web users have a
          notoriously small attention span. Subtle changes in the content or
          layout of a landing page can make significant changes in how many
          people take your desired action. Redesigning your entire website can
          be very costly and time consuming. Instead, I can design and optimise
          a single landing page, and attach it to your website as a subdomain
          (subdomain.yourwebsite.com).{" "}
        </p>
        <h2>My Process For Landing Page Design</h2>
        <h3>Design and Creation</h3>
        <p>
          We work to create a page tailored to your advertising campaign that
          optimises your conversion rate.
        </p>
        <h3>Tracking</h3>
        <p>
          {" "}
          I track events on the landing page to keep an eye on user behaviour.
        </p>
        <h3>A/B Testing</h3>
        <p>
          I optimise the landing pages by systematically testing the most
          important aspects of the page.
        </p>
      </section>
    </Layout>
  );
};

export default landingPageDesign;

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
