import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../components/Form/Form";
import * as classes from "../styles/index.module.css";

import IconBox from "../components/IconBox/IconBox";
import Eye from "../images/icons/eye.svg";
import Coding from "../images/icons/coding.svg";
import Pound from "../images/icons/pound.svg";
import Handshake from "../images/icons/handshake.svg";

import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard";
import ComponentCarousel from "../components/ComponentCarousel/ComponentCarousel";
const Home = ({ data }) => {
  const iconData = [
    {
      iconSrc: Eye,
      title: "Transparency",
      text: "Straightforward honesty with both my fees and my performance",
    },
    {
      iconSrc: Coding,
      title: "In-Depth Knowledge",
      text:
        "Years of coding experience help me understand the internal dynamics of the web",
    },
    {
      iconSrc: Pound,
      title: "Affordable",
      text: "Less overhead than an in-house marketer",
    },
    {
      iconSrc: Handshake,
      title: "Proactive",
      text: "You won't need to chase me, I'll be the one to update you",
    },
  ];

  return (
    <Layout
      title="Freelance Digital Marketer"
      hero={data.hero.childImageSharp.fluid}
    >
      <SEO title="Dan Gallagher Marketing" />

      <section className={classes.Section}>
        <h2>An Affordable, Transparent Freelancer</h2>
        <div className={classes.TwoColGrid}>
          {iconData.map((icon) => (
            <IconBox
              key={icon.title}
              iconSrc={icon.iconSrc}
              title={icon.title}
              text={icon.text}
              iconAlt={icon.title}
            />
          ))}
        </div>
      </section>
      <section className={classes.Section}>
        <h2>About Me</h2>
        <p>
          I'm a 24 year old freelancer, currently looking to take on new
          clients.  Quality of service is my priority, and my ever-expanding
          skill set allows me to do it better than most.
        </p>
        <button>Read More</button>
      </section>

      <section style={{ margin: "150px auto 150px auto" }}>
        <ComponentCarousel>
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 1"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 2"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 3"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 4"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 5"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 6"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 7"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 8"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 9"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 10"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 11"
            text="Increased conversion rate by 253%"
          />
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Case Study 12"
            text="Increased conversion rate by 253%"
          />
        </ComponentCarousel>
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
        <Form />
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

    bennisonBrown: file(
      relativePath: { eq: "caseStudies/bennison-brown.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
