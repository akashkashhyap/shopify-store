require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "gatsby-starter-shopify",
    siteTitleDefault: "gatsby-starter-shopify by @GatsbyJS",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    hrefLang: "en",
    siteDescription:
      "A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "amazingStore",
        accessToken: 'MC5ZaURQLWhFQUFDZ0FDRWdI.b--_vU8NAO-_ve-_vWfvv71_JGkda0fvv71_77-977-977-9QO-_vR5K77-977-977-977-9cy8yCg',
        customTypesApiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImFtYXppbmdzdG9yZS05ZTVkMWY1Yi05MjE4LTRlZjMtOTJlOC03MDEyMTQxYjY5ZDBfNCIsImRhdGUiOjE2NDYzMTc1ODksImRvbWFpbiI6ImFtYXppbmdzdG9yZSIsImlhdCI6MTY0NjMxNzU4OX0.dKumI8vm53ltEUOKh8caZFnJ4L7fUvTGpKPE4t25hHU'
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
   
  ].filter(Boolean),
}
