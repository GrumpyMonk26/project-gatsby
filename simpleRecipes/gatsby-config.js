/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Simply Recipes`,
    description: `Nice and clean recipes site.`,
    author: `@gatsbyjs`,
    person: { name: `John Doe`, age: `30` },
    simpleData: [`one`, `two`, `three`],
    ComplexData: [
      { name: `John Doe`, age: `30` },
      { name: `Jane Doe`, age: `40` },
      { name: `Jack Doe`, age: `50` },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
