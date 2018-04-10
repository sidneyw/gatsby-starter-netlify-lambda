# gatsby-starter-netlify-lambda
For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site https://github.com/RcrsvSquid/gatsby-starter-netlify-lambda
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop

# in another shell
npm run develop:lambda
```

In development lambda functions in the folder `src/lambda` will each be served
by the netlify-lambda dev server on port 9000. Each file name becomes the name
of the endpoint `src/lambda/hello.js -> http://localhost:9000/hello`

In production lambda functions will be available at `/.netlify/functions/<function name>`

To avoid issues with CORS there is a dev proxy included in the project. All
requests to `/localhost:9000` in development are forwarded to the netlify dev
server `/localhost:9000/hello -> http://localhost:9000/hello`

## Build
You can build the project very easily by running
```sh
npm run build
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RcrsvSquid/gatsby-starter-netlify-lambda)
