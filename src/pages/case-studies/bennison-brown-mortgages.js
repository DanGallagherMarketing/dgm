import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../../components/Form/Form";
import * as classes from "../../styles/index.module.css";
import "../../styles/posts.css";

const CaseStudy = ({ data }) => {
  return (
    <Layout
      title="Case Study - Bennison Brown Mortgages"
      hero={data.hero.childImageSharp.fluid}
    >
      <SEO title="Case Study - Bennison Brown Mortgages" />
      <article>
        <section className={classes.Section}>
          <h2>The Situation</h2>
          <p>
            Bennison Brown are a London mortgage broker. Their service is
            centred around finding the best possible mortgage deals available
            for their customers, and making their mortgage journey as
            stress-free as possible.
          </p>
          <p>
            Bennison Brown hired me in 2017 as their 4th member of staff, my job
            being to scale the business by getting leads in as a Google Ads
            manager. They had experimented with Google Ads for a few months but
            hadn’t managed to make it a profitable venture.
          </p>
          <p>
            The campaign averaged a Click-Through rate of 1.40%, a conversion
            rate of 2.04% and a Cost Per Conversion of £27.31 and a Cost Per
            Click of £0.56
          </p>
          <ul>
            <li>Click-Through Rate: 1.4%</li>
            <li>Cost Per Click: £0.56</li>
            <li>Cost Per Conversion: £27.31</li>
            <li>Conversion Rate: 2.04%</li>
          </ul>
        </section>

        <section className={classes.Section}>
          <h2>The Challenge</h2>
          <p>
            The primary issue was that they were attracting the wrong traffic
            using broad match keywords (these keywords give Google freedom to
            match your keywords with thematically related phrases, and these are
            often unwanted.
          </p>
          <p>
            Combined with a poor negative keyword list, their ads were showing
            for a lot of search terms that were either completely irrelevant, or
            showed a small amount of interest in using a mortgage broker.
          </p>
          <p>
            A lot of their recorded conversions were people who had no intention
            of using a mortgage broker, but were instead calling to ask for
            advice on the current best rates on the market. Essentially,
            although they were getting phone call (Marketing Qualified Leads), a
            very small portion of those became actual customers (Sales Qualified
            Leads).
          </p>
        </section>
        <section className={classes.Section}>
          <h2>The Process</h2>
          <p>
            After completing some initial keyword research, I removed all broad
            match keywords, and replaced them with a mixture of Broad Match
            Modified, Exact Match or Phrase Match keywords. I also created a
            comprehensive negative keyword list.
          </p>
          <p>
            Whilst keeping an eye on the search terms report, I was able to make
            sure that all search terms that their ads showed for indicated
            potential interest in using a mortgage broker
          </p>
        </section>
        <section className={classes.Section}>
          <h2>The Results</h2>
          <p>The KPIs were now the following:</p>
          <ul>
            <li>Click-Through Rate: 1.53%</li>
            <li>Cost Per Click: £3.20</li>
            <li>Cost Per Conversion: £57.75</li>
            <li>Conversion Rate: 5.54%</li>
          </ul>
          <p>
            The CPC and Cost Per Conversion increased, but this was a good thing
            as it reflected that the keywords that Google was bidding on were
            more valuable and profitable than before. This translated into
            better quality leads, thus a higher conversion rate from MQL to SQL.
          </p>
        </section>
        <section className={classes.Section}>
          <h2>Further Improvements</h2>
          <p>
            Phase 2 Although the conversion rate was higher, and they were
            consistently getting leads profitably, the Click-Through Rate was
            poor at 1.34%, which has a negative impact on the quality score of
            the ads, making them more expensive
          </p>
          <p>
            The business, now at 17 staff members has scaled significantly.
            Despite this, the campaign budget needed to be limited as staff can
            only cope with a certain capacity of leads.
          </p>
          <p>
            With a limited budget, there was room to make the most of it. Using
            the data previously collected, I created an ad group containing only
            the highest performing keywords, and created ads specifically for
            those keywords.
          </p>
          <p>
            As of now that, ad group is performing with a CTR of 5.60%, a CPC of
            6.93%, a conversion rate of 12.83% and a Cost / Conv of £54.04
          </p>
        </section>
        <section className={classes.Section}>
          <h2>The Latest Results</h2>
          <p>As of April 2021, KPIs are now the following:</p>
          <ul>
            <li>Click-Through Rate: 5.6%</li>
            <li>Cost Per Click: £6.93</li>
            <li>Cost Per Conversion: £54.04</li>
            <li>Conversion Rate: 12.83%</li>
          </ul>
          <p>Translated into percentage changes compared to when I started:</p>
          <ul>
            <li>Click-Through Rate: Rose by 300%</li>
            <li>Cost Per Click: Rose by 11.4%</li>
            <li>Cost Per Conversion: Rose by 98%</li>
            <li>Conversion Rate: Rose by 529%</li>
          </ul>
        </section>
      </article>
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
    hero: file(relativePath: { eq: "case-study-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
