import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql, Link } from "gatsby";
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
          I'm a 25 year old freelancer who has been advertising with Google Ads
          since 2017. I optimise Google Ads campaigns, provide bespoke reports,
          and create blazing fast, beautiful landing pages.
        </p>
        <Link to="/about-me">
          <button>Read More</button>
        </Link>
      </section>

      <section
        style={{ margin: "200px auto 150px auto" }}
        id="case-study-carousel"
      >
        {/* <h2 style={{ textAlign: "center" }}>Case Studies</h2> */}
        <ComponentCarousel>
          <CaseStudyCard
            fluid={data.bennisonBrown.childImageSharp.fluid}
            title="Bennison Brown"
            text="Increased Conversion Rate by 529%% with Google Ads"
            link="/case-studies/bennison-brown-mortgages"
          />
          <CaseStudyCard
            fluid={data.altorSolicitors.childImageSharp.fluid}
            title="Altor Solicitors"
            text="Increased Return on Ad Spend by 293% with Google Ads"
            link="/case-studies/altor-employment-solicitors"
          />
          <CaseStudyCard
            fluid={data.industryCV.childImageSharp.fluid}
            title="Industry CV"
            text="Landing Page Design"
            link="/case-studies/industry-cv"
          />
          <CaseStudyCard
            fluid={data.henryMalcolm.childImageSharp.fluid}
            title="Henry Malcolm"
            text="Landing Page Design"
            link="/case-studies/henry-malcolm"
          />
          <CaseStudyCard
            fluid={data.riseRinseRepeat.childImageSharp.fluid}
            title="Rise Rinse Repeat"
            text="Landing Page Design"
            link="/case-studies/rise-rinse-repeat"
          />
        </ComponentCarousel>
      </section>

      <section className={classes.Section}>
        <h2>How To Begin Working With Me</h2>
        <ol>
          <li>
            You submit an enquiry below or send an email to
            daniel@dangallaghermarketing.co.uk
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
      {/* <img
        height="1"
        width="1"
        style="display:none;"
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=3488489&conversionId=4634513&fmt=gif"
      /> */}
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
        fluid(maxWidth: 340, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    altorSolicitors: file(relativePath: { eq: "caseStudies/altor-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 340, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    industryCV: file(relativePath: { eq: "caseStudies/icv-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 340, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    henryMalcolm: file(relativePath: { eq: "caseStudies/henry-malcolm.png" }) {
      childImageSharp {
        fluid(maxWidth: 340, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    riseRinseRepeat: file(
      relativePath: { eq: "caseStudies/rise-rinse-repeat.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 340, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
