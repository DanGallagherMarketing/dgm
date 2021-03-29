import React, { useState } from "react";
import * as classes from "./Nav.module.css";
import { graphql, useStaticQuery } from "gatsby";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const flatListToHierarchical = (data) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
      const newItem = { ...item.node };
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

  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  const hierarchicalList = flatListToHierarchical(data.allWpMenuItem.edges);

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
