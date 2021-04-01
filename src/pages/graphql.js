import React from "react";
import { graphql } from "gatsby";
const graphqlPage = ({ data }) => {
  console.log(data.allWpCategory.nodes);

  const categories = data.allWpCategory.nodes;

  categories.forEach((category) => console.log(category));
  //   data.allWpCategory.forEach((category) => {
  //     console.log(category);
  //   });
  return <div></div>;
};

export default graphqlPage;

export const query = graphql`
  query {
    allWpCategory {
      nodes {
        id
        slug
        name
      }
    }
  }
`;
