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
      title="Altor Employment Solicitors"
      hero={data.hero.childImageSharp.fluid}
    >
      <SEO title="Altor Employment Solicitors" />

      <section className={classes.Section}>
        <h2>The Situation</h2>
        <p>
          Altor Employment Solicitors are a small business of employment
          solicitors with offices in Milton Keynes, Bishop’s Stortford and
          London. They began experimenting with Google Ads in early 2019, and
          experienced some success albeit at a high cost, and suspected that
          there was a lot of room for improvement.
        </p>
        <p>
          During their campaign between April and July 2020, they had recorded a
          total of 20 conversions at a cost of £2,190, which gives a cost per
          conversion of £110.
        </p>
        <p>
          Another issue was the poor quality of their leads – a lot of phone
          calls they received were from people hoping to get free advice.
        </p>
      </section>

      <section className={classes.Section}>
        <h2>Diagnosis</h2>
        <h3>Wasted Spend</h3>
        <p>
          When conducting an initial audit of the account, I found some quick
          wins that would instantly save them money. They were advertising at
          all times of the day, and viewing their data by hour of the day showed
          that business hours were clearly more profitable than non-business
          hours, yet their budget was spent evenly throughout all hours.
        </p>
        <p>
          Simply restricting the ad spend to business hours allowed all their
          budget to be spent when conversion rates are high, almost doubling
          their conversion rate
        </p>
        <h3>Poor Leads</h3>
        <p>
          We had a consultation to better help me understand the Employment Law
          industry, and after consulting the search terms report, it was clear
          that there were some key words that were attracting the wrong kind of
          leads.{" "}
        </p>
        <p>
          Words that implied a cheap or free service were our enemy, so after
          going through all of the search terms we didn’t want to see again, we
          were able to populate a negative keyword list that refined the phrases
          our ads appeared for. In the following months, they confirmed that
          they were no longer being contacted by the wrong kind of lead.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>The Process</h2>
        <p>
          The main job of course is always to maximise our return on ad spend,
          and there are a lot of areas to tweak to achieve it.{" "}
        </p>
        <h3>Keyword research</h3>
        <p>
          The daily budget was very small - £25 a day. After extensive keyword
          research and competitor analysis, I came to the conclusion that it’s
          better to focus solely on the bottom funnel keywords (keywords that
          imply the highest intent to convert). This way we can collect a useful
          quantity of data on the performance of these keywords, rather than
          spreading it too thinly over a large amount of keywords.
        </p>
        <h3>Landing page design</h3>
        <p>
          I did not create a custom landing page for Altor, but I did make some
          edits to their current landing page – listing testimonials at the
          bottom as well as making their contact form more pronounced
        </p>
        <h3>Launching the new campaign</h3>
        <p>
          Once I was happy with how the new campaign looked, I launched it as a
          separate to the old campaign. This way I was able to compare the
          performance of the previous campaign to the new one.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>The Results</h2>
        <p>
          Over the coming months, the Click-Through Rate increased to 1.53%,
          conversion rate to 5.54% and cost per conversion to £57.75 and CPC to
          £3.20.{" "}
        </p>
        <p>
          The CPC and Cost Per Conversion increased, but this was a good thing
          as it reflected that the keywords that Google was bidding on were more
          valuable and profitable than before. This translated into better
          quality leads, thus a higher conversion rate from MQL to SQL.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>Further Improvements</h2>
        <p>
          Phase 2 Although the conversion rate was higher at 6.38%, and they
          were consistently getting leads in at a cost per lead of £63.59, the
          Click-Through Rate was poor at 1.34%, and CPC was £4.06.
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
        <h2>Book A Free Consultation</h2>
        <Form />
      </section>
    </Layout>
  );
};

export default CaseStudy;

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
