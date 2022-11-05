require('dotenv').config();
const config = require('./config');

module.exports = {
  /* General Information */
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDesc,
    author: config.siteAuthor,
    logoUrl: config.siteLogoUrl,
    tiles: config.tiles,
  },
  pathPrefix: config.pathPrefix,
  /* Plugins */
  plugins: [
    `gatsby-plugin-compile-es6-packages`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/backgrounds/`,
        name: 'tile_backgrounds',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
  ],
};
