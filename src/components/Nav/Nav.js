import React, { useState } from "react";
import * as classes from "./Nav.module.css";
import { graphql, useStaticQuery } from "gatsby";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const flatListToHierarchical = (data) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
      // const newItem = { ...item.node };
      const newItem = { ...item };
      const { id, parentId } = newItem;
      childrenOf[id] = childrenOf[id] || [];
      newItem["children"] = childrenOf[id];
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem);
    });
    return tree;
  };

  const data = useStaticQuery(graphql`
    {
      allWpMenuItem(filter: { locations: { eq: PRIMARY } }) {
        edges {
          node {
            id
            parentId
            url
            title: label
          }
        }
      }
    }
  `);

  const staticData = [
    { id: "1", parentId: null, url: "/about-me", title: "About" },
    { id: "2", parentId: null, url: "#", title: "Services" },
    {
      id: "3",
      parentId: "2",
      url: "/services/google-ads",
      title: "Google Ads",
    },
    {
      id: "4",
      parentId: "2",
      url: "/services/landing-page-design",
      title: "Landing Page Design",
    },
    {
      id: "5",
      parentId: null,
      url: "/#case-study-carousel",
      title: "Case Studies",
    },
    // {
    //   id: "6",
    //   parentId: "5",
    //   url: "/case-studies/altor-employment-solicitors",
    //   title: "Bennison Brown Mortgages",
    // },
    // {
    //   id: "7",
    //   parentId: "5",
    //   url: "/case-studies/altor-employment-solicitors",
    //   title: "Altor Employment Solciitors",
    // },
    {
      id: "8",
      parentId: null,
      url: "/contact",
      title: "Contact",
    },
  ];

  // const hierarchicalList = flatListToHierarchical(data.allWpMenuItem.edges);
  const hierarchicalList = flatListToHierarchical(staticData);
  console.log(hierarchicalList);
  return (
    <nav>
      <ul className={classes.NavMenu}>
        {hierarchicalList.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
