<h1 align="center">DoEi!</h1>

<div align="center">
   Solution for a challenge from  <a href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brasil</a>.
</div>

<div align="center">
  <h3>
    <a href="https://capstone-mocha.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/enias-oliveira/doei/tree/master/src">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![feed_screenshot](https://lh3.googleusercontent.com/pw/ACtC-3ddL0fN97-62uBjw0fT6GVT41i_EwJoGeCmPpJ-OKujBob5-V-8AkVfr0wwVLHsV0mjFHY2GcgeTfGbNrE-5UshI6kqjoBhJp2RJ3_RY-o_OsIHRdI7KVWO4S4RSk2s-D-tohotpXybzOBGrpCgA6we=w1903-h937-no?authuser=0)

DoEi! is a React Application where ONGs can post campaigns to raise donations and for volunteers to easily book donations, making the process of donating easy and fast.

![home_mobile_screenshot](https://lh3.googleusercontent.com/pw/ACtC-3fgo7delxEbZcNnYxYSGz1rYfQtpO2rR3Ivw-OA0UzAMmdkchbpA0nOJTx_bEh0Jy4u6R3PrrtavQVNGN_76R2FDrqTx_18uA8aDmeM5ZzJZ5tHHQlYQfqChwO9rhxz-5hXR6qfe8irfqMIq_n9JvOp=w413-h843-no?authuser=0)

This project was developed by a team of 5 students, as our "Capstone Project" in the "Advanced Front End with React" course from Kenzie Academy. We were tasked to create a "Fake Back End" using JSON-server.[Doei JSON-Server](https://github.com/enias-oliveira/doei-server).

We learned how to structure a front-end system, studying and consuming a back-end API, the use of multiple javascript libraries, and practical implementation of Scrum and its rituals/ceremonies. Planning and communication were essential, so we used Figma to create a mockup and Trello for creating and assigning tasks.

![home_screenshot](https://lh3.googleusercontent.com/pw/ACtC-3eZzU-o0elhI5AZU0uZ36zfmSMh9iB__xXK-v24Ea-IaHxveUuu5WXLTh18INxwlKRUEwbmgYGR9BSNgB8lcSCrREtWoSbD-KnrSW6tYyHPcNzeTvwl19Xadym85mttwtOgCzQLvQDcaiqILtbz5Pgb=w1904-h935-no?authuser=0)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [Antd](https://ant.design/): A design system for enterprise-level products.
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
- [Material-UI](https://material-ui.com/): React components for faster and easier web development.
- [Cypress](https://www.cypress.io/): Fast, easy and reliable testing for anything that runs in a browser.
- [Framer Motion](https://www.framer.com/motion/): A production-ready motion library for React.
- [styled components](https://styled-components.com/): Visual primitives for the component age by using the best bits of ES6 and CSS to style apps.
- [React Router](https://reactrouter.com/): A collection of navigational components
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
- [Redux](https://redux.js.org/): A Predictable State Container for JS Apps
- [React-Redux](https://react-redux.js.org/): Official React bindings for Redux
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk): Middleware allows you to write action creators that return a function instead of an action
- [Yup](https://www.npmjs.com/package/yup): A JavaScript schema builder for value parsing and validation.

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- ONGs and volunteers can create an account with a username, email, and password. Each with different layout and pages.
  ![login_page_screenshot](https://lh3.googleusercontent.com/pw/ACtC-3cnsFZ4gkQ5H5AWn5j61u4c36czJztyJDj1RpJJL5UFkuXDVUeWvyiXvi379--icGDnUw2BefR-Mbbbk1PV2zxpp0uleHjzIGxDrhmn5zAcgxOkUvToCueUjEMFNtI2gfB_7KRJjqxg9babaOkpVDI1=w1253-h577-no?authuser=0)

- ONGs can create custom campaigns and post them to registered volunteers and DoEi! visitors.
  ![campaign_form](https://lh3.googleusercontent.com/pw/ACtC-3c8iL4QwrIg_Oyv2PFifXXMLiQTk_BuIyAI2isl3ia22ILtss7dJlNPGiV5LDxoWNKFGsmcTPoWCvN5IMnfS60gch3kSwNHGhWdweIVEyJHpm7mPNjSdJWniYy8syq0seXNIiJfvAKU02P2xGl8A82l=w1918-h938-no?authuser=0)
  ![campaing_page](https://lh3.googleusercontent.com/pw/ACtC-3ese3lP2uCQBo1fUTLJsZ4w84BVzVvqsXEykb01XzibCS0frn9Z7ziGW5R0W7Awp8HQ2CyjxU0ceNKrtw01NS4lP6IZzdGrlX3Zecmy9h2r44gv7GgZMFCPZqaNbZWH7oqJJ98aX2yUCdPxkHHgYB6p=w1919-h947-no?authuser=0)

- Volunteers can book a donation and manage them in their profile page.
  ![book_donation_form](https://lh3.googleusercontent.com/pw/ACtC-3fJMINClZcXJ--ab5yxxfgXV6QBc-gzF4nw1Z6rzsQlUuXfnsz1_3ghzACqRutUXCACp3BAH4Ws4P757b5xqQ-Yb9BDnxi95gHBcetuM1P2WfKlg5Sf4rUQknstIifJzlOW34r6MODMVEyGmNi3nlzC=w1919-h945-no?authuser=0)
  ![volunteer_profile_page](https://lh3.googleusercontent.com/pw/ACtC-3e2oCf72iy7Yh0LCCLxNRZgCr4otBAyz8WYb0CWOI_AfLO1xjcJCszVVNogUMPu_jQ2dZ3h4Styi3bx6w-2vWvtmONGecJFv9FU3oW9tvW2wuA0lU7bMpxmfUcEgbMTVpVHjCBIbqYnlRWZRGDzd7Hr=w1919-h936-no?authuser=0)

- ONGs and Volunteers can edit their profile name and description.
  ![profile_edir_form](https://lh3.googleusercontent.com/pw/ACtC-3dW4eL5QG0LCzL6yEwNUtgl6ffAJn0tT1-R8xQguIrS5OV9W8PtOgtMp6NB4dX1KWOD_sOWoAZ1tM2Ea0CA0bDY4BZbJFHTRD-PmUvssrfd8S21ZSrsMiOmviIP31JmOO-WGeBAxtNd_rY4PS4qbZj2=w371-h813-no?authuser=0)

## How To Use

## Available Scripts

### Basics: Using NPM

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/enias-oliveira/doei

# Install dependencies
$ npm install

# Run the app
$ npm start
```

### Advanced: More scripts and using Yarn

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Christian Siqueira](https://www.linkedin.com/in/christian-smmc/)
- [Enias Oliveira](https://www.linkedin.com/in/enias-oliveira/)
- [Raphael Souza](https://www.linkedin.com/in/raphaelgs96/)
- [Samara Collet](https://www.linkedin.com/in/samaracollet/)
- [Thiago Jacques](https://www.linkedin.com/in/thiago-linhares-jacques/)

- [devChallenges](https://devchallenges.io/) (Provided README template)
