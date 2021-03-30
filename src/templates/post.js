import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../components/Form/Form";
import * as classes from "../styles/index.module.css";
const post = (props) => {
  console.log(props.pageContext);
  return (
    <Layout title="Blog" hero={props.data.hero.childImageSharp.fluid}>
      <SEO title="Blog" />
      <section className={classes.Section}>{props.pageContext.content}</section>
      <section className={classes.Section}>
        <Form />
      </section>
    </Layout>
  );
};

export default post;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
