module.exports = {
    siteMetadata: {
        title: `Brand 1 title`,
        description: `Brand 1 description`,
        author: `@author brand1`,
      },
    plugins: [
     `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/assets/images`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
  }