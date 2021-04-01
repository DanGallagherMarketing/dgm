import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Form from "../components/Form/Form";
import * as classes from "../styles/index.module.css";
import Archive from "../components/Archive/Archive";

const archive = (props) => {
  return (
    <Layout title={props.pageContext.title}>
      <SEO title={props.pageContext.title} />
      <div className={classes.ArchiveTitle}>
        <h1 style={{ color: "#fff" }}>{props.pageContext.title}</h1>
      </div>
      <Archive posts={props.pageContext.posts} />
    </Layout>
  );
};

export default archive;
