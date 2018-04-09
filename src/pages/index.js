import React from 'react'
import Link from 'gatsby-link'

const lambdaURL =
  process.env === 'production' ? '/.netlify/functions' : '/localhost:9000'

fetch(`${lambdaURL}/hello`)
  .then(res => res.json())
  .then(data => console.log(data.hello))
  .catch(err => console.error(err))

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
