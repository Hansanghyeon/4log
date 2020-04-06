const path = require('path');
const _ = require('lodash');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * Create Wp Category Pages
   */
  const wpCategory = await graphql(`
    query GET_NODE_WP_CATEGORIES {
      wpgql {
        categories {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `);
  if (wpCategory.error) throw wpCategory.error;
  // wpCategory white list
  wpCategory.data.wpgql.categories.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(
        __dirname,
        'src/views/components/templates/category.tsx',
      ),
      context: {
        categoryId: node.id,
      },
    });
  });

  /**
   * Create Wp Post page
   */
  const wpPost = await graphql(`
    query GET_NODE_WP_POSTS {
      wpgql {
        posts {
          edges {
            node {
              databaseId
              id
              slug
            }
          }
        }
      }
    }
  `);
  if (!wpPost) throw wpPost.error;

  wpPost.data.wpgql.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(
        __dirname,
        'src/views/components/templates/post/Wp/index.tsx',
      ),
      context: {
        postId: node.id,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
