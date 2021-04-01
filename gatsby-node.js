const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const data = await graphql(`
    query {
      allWpPost {
        nodes {
          excerpt
          id
          modified
          title
          uri
          date
          categories {
            nodes {
              id
              name
            }
          }
          author {
            node {
              name
            }
          }
        }
      }

      allWpCategory {
        nodes {
          id
          slug
          name
        }
      }
    }
  `);

  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = data;

  // query content for WordPress categories
  const {
    data: {
      allWpCategory: { nodes: categories },
    },
  } = data;

  // console.log(categories);

  const archiveTemplate = path.resolve("./src/templates/archive.js");
  const postTemplate = path.resolve(`./src/templates/post.js`);

  categories.forEach((category) => {
    const allPostsCopy = [...allPosts];
    // console.log(allPostsCopy);
    const postsForCategory = allPostsCopy.filter((post) => {
      const allCategoriesForPost = post.categories.nodes;

      let postHasCategory = false;
      allCategoriesForPost.forEach((cat) => {
        if (cat.name === category.name) {
          postHasCategory = true;
        }
      });
      return postHasCategory;
    });

    createPage({
      path: category.slug,
      component: slash(archiveTemplate),
      context: {
        id: category.id,
        title: category.name,
        posts: postsForCategory,
      },
    });
  });

  allPosts.forEach((post) => {
    createPage({
      // will be the url for the page
      path: post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
        content: post.content,
      },
    });
  });
};
