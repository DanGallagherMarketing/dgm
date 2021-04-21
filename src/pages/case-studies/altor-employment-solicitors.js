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
      title="Case Study - Altor Employment Solicitors"
      hero={data.hero.childImageSharp.fluid}
    >
      <SEO title="Case Study - Altor Employment Solicitors" />
      <article>
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
            During their campaign between April and July 2020, they had the
            following KPIs:
          </p>
          <ul>
            <li>Cost Per Click: £10.97</li>
            <li>Cost Per Conversion: £110</li>
            <li>Conversion Rate: 10%</li>
            <li>Return on Ad Spend: 118%</li>
          </ul>
        </section>
        <section className={classes.Section}>
          <h2>The Challenge</h2>
          <p>
            Their current return on ad spend meant that Google Ads was barely
            worth the investment. This number is also inflated, as it assumes
            every conversion is worth the same £240, however a large portion of
            their conversions were poor leads that would never convert.
          </p>
          <p>
            I needed to not only streamline the campaign, but also increase the
            quality of leads calling in, to make the campaign as profitable as
            possible.
          </p>
        </section>

        <section className={classes.Section}>
          <h2>Initial Optimisation</h2>
          <h3>Wasted Spend</h3>
          <p>
            When conducting an initial audit of the account, I found some quick
            wins that would instantly save them money.
          </p>
          <p>
            They were advertising at all times of the day, but their ad schedule
            report showed that business hours were clearly more profitable than
            non-business hours. In fact, they spent 50% of their budget on
            clicks during hours that gave them 10% of their conversions.
          </p>

          <p>
            Simply restricting the ad spend to business hours allowed that other
            50% of their budget to be spent during hours that would give them 9x
            more conversions than it was currently getting them
          </p>

          <h3>Poor Leads</h3>
          <p>
            We had a consultation to better help me understand the Employment
            Law industry, and after consulting the search terms report, it was
            clear that there were some key words that were attracting the wrong
            kind of leads.
          </p>
          <p>
            Words that implied a cheap or free service were our enemy, so after
            going through all of the search terms we didn’t want to see again,
            we were able to populate a negative keyword list that refined the
            phrases our ads appeared for. In the following months, they
            confirmed that they were no longer being contacted by the wrong kind
            of lead.
          </p>
        </section>
        <section className={classes.Section}>
          <h2>Campaign Management</h2>
          <p>
            The main job of course is always to maximise our return on ad spend,
            and there are a lot of areas to tweak to achieve it.{" "}
          </p>
          <h3>Keyword research</h3>
          <p>
            The daily budget was very small - £25 a day. After extensive keyword
            research and competitor analysis, I came to the conclusion that it’s
            better to focus solely on the bottom funnel keywords (keywords that
            imply the highest intent to convert). This way we can collect a
            useful quantity of data on the performance of these keywords, rather
            than spreading it too thinly over a large amount of keywords.
          </p>
          <h3>Landing page design</h3>
          <p>
            I did not create a custom landing page for Altor, but I did make
            some edits to their current landing page – listing testimonials at
            the bottom as well as making their contact form more pronounced
          </p>
          <h3>Launching the new campaign</h3>
          <p>
            Once I was happy with how the new campaign looked, I launched it as
            a separate to the old campaign. This way I was able to compare the
            performance of the previous campaign to the new one.
          </p>
          <h3>Optimising the campaign</h3>
          <p>
            Campaign optimisation is always a process of analysing all the data
            available to you, and making profitable decision based on the
            insights provided. Whenever the data revealed areas for improvement,
            the campaign would be tweaked where necessary.{" "}
          </p>
        </section>
        <section className={classes.Section}>
          <h2>The Results</h2>
          <p>
            Between August and December 2020 following the launch of the new
            campaign, these were the following KPIs:
          </p>
          <ul>
            <li>Cost Per Click: £8.47</li>
            <li>Cost Per Conversion: £53.83</li>
            <li>Conversion Rate: 15.73%</li>
            <li>Return on Ad Spend: 346%</li>
          </ul>
          <p>Translated into percentage changes from the previous campaign:</p>
          <ul>
            <li>Cost Per Click: Fell by 23%</li>
            <li>Cost Per Conversion: Fell by 51%</li>
            <li>Conversion Rate: Rose by 57%</li>
            <li>Return on Ad Spend: Rose by 293%</li>
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
