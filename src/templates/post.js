import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../components/Form/Form";
import * as classes from "../styles/index.module.css";

const post = (props) => {
  return (
    <Layout
      title="Blog"
      hero={props.data ? props.data.hero.childImageSharp.fluid : null}
    >
      <SEO title="Blog" />
      <section
        className={classes.Section}
        dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
      />
      <section className={classes.Section}>
        <Form />
      </section>
    </Layout>
  );
};

export default post;
