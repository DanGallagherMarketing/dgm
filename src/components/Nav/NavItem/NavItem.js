import React, { useState } from "react";
import * as classes from "./NavItem.module.css";

const NavItem = (props) => {
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  const [navItemHovered, setNavItemHovered] = useState(false);
  const [subMenuHovered, setSubMenuHovered] = useState(false);

  const { item } = props;

  const handleMouseEnterNavItem = () => {
    setNavItemHovered(true);
  };

  const handleMouseLeaveNavItem = () => {
    setNavItemHovered(false);
  };
  const handleMouseEnterSubMenu = () => {
    setSubMenuHovered(true);
  };

  const handleMouseLeaveSubMenu = () => {
    setSubMenuHovered(false);
  };

  return (
    <div>
      <li style={{ listStyleType: "none", marginBottom: "0" }}>
        <a
          onMouseEnter={() => handleMouseEnterNavItem()}
          onMouseLeave={() => handleMouseLeaveNavItem()}
          className={classes.NavItem}
          href={item.url}
          key={item.id}
        >
          {item.title}
        </a>
      </li>
      <ul className={classes.SubMenu}>
        {(navItemHovered || subMenuHovered) &&
          item.children &&
          item.children.map((child) => (
            <a
              onMouseEnter={() => handleMouseEnterSubMenu()}
              onMouseLeave={() => handleMouseLeaveSubMenu()}
              className={classes.NavItem}
              href={child.url}
              key={child.id}
            >
              {child.title}
            </a>
          ))}
      </ul>
    </div>
  );
};

export default NavItem;
