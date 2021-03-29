import React from "react";
import PropTypes from "prop-types";

import BackgroundImage from "../BgImage/BackgroundImage";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "../../styles/global.css";
import * as classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <BackgroundImage
        title={props.title}
        src={props.hero}
        className={classes.BackgroundImage}
      />
      <main className={classes.Main}>{props.children}</main>
      <section className={classes.Section}>
        <Form />
      </section>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
