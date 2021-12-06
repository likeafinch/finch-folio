/* eslint-disable filenames/match-regex */

const { manifest, ...siteMetadata } = require('./config');

module.exports = {
	/* General Information */
	siteMetadata,
	/* Plugins */
	plugins: [
		`gatsby-plugin-perf-budgets`,
		`gatsby-plugin-webpack-bundle-analyser-v2`,
		`gatsby-plugin-loadable-components-ssr`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-compile-es6-packages`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/`,
				name: `images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/backgrounds/`,
				name: `tile_backgrounds`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				...manifest,
			},
		},
		`gatsby-plugin-smoothscroll`,
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
				// The values for each key in this example are the defaults the plugin uses.
				sourceMap: true,
				autoLabel: 'dev-only',
				labelFormat: `[local]`,
				cssPropOptimization: true,
			},
		},
		/* Must be placed at the end */
		// `gatsby-plugin-offline`,
	],
};
