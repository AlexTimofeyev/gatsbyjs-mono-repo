module.exports = {
    siteMetadata: {
        title: `Brand 2 title`,
        description: `Brand 2 description`,
        author: `@author brand2`,
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