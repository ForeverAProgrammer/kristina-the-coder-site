# Kristina The Coder website

This site was created based off of the [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter) Gatsby starter.

The site uses: 

* [Contentful](https://www.contentful.com) for creating the content like the blog articles or banner. 
* [GatsbyJS](https://www.gatsbyjs.org/) for creating the UI
* [GatsbyJS Cloud](https://www.gatsbyjs.com/?_ga=2.1868145.1902461973.1596406070-267392013.1570417210) for managing the builds
* [Netlify](https://www.netlify.com/) for hosting the site


## Features
* Easily add new content without any code changes using [Contentful](https://www.contentful.com)
* Uses [GatsbyJS](https://www.gatsbyjs.org/) which is a static site generator that allows you to create super fast websites using [React](https://reactjs.org/) 
* [GatsbyJS Cloud](https://www.gatsbyjs.com/?_ga=2.1868145.1902461973.1596406070-267392013.1570417210) is used to generate reports that show the changes made in a pull request and shows statics on Performance, Accessibility and Best Practices. Tests the site before deploying it to make sure bad versions are not published
* [Netlify](https://www.netlify.com/) hosts the site. It also has support for content management and builds but this site does not use those features. 

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.
