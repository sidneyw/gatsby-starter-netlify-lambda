module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Netlify Lambda',
  },
  // The gatsby proxy will proxy requests starting with `prefix` to
  // the path `${url}${prefix}`. Therefore any request that goes to
  // /localhost:9000 in development goes to http://localhost:9000 which is where
  // the development lambda serve is located by default.

  // When hosting lambda functions in production on netlify the functions will
  // be available under the same domain at `${your-domain.tld}/.netlify/functions`
  // and so CORS in no longer an issue
  proxy: {
    prefix: '/localhost:9000',
    url: 'http:/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`, // must be last entry in the array
  ],
}
