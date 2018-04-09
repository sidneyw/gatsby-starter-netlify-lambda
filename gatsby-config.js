module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Netlify Lambda',
  },
  proxy: {
    prefix: '/localhost:9000',
    url: 'http:/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`, // must be last entry in the array
  ],
}
