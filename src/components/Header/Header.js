import React from "react";
import * as classes from "./Header.module.css";
import Logo from "../../images/logo.png";
import Nav from "../Nav/Nav";
console.log(classes);

const Header = () => {
  return (
    <header className={classes.Header}>
      <div>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
