# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Default framework Antd

We have included in the boilerplate the antd but this is a choise wich can be changed. We have create a 
new branch `main-mui-template` with the same architechure but using MUI components

## Architechture of the app

To help in the organization of the code we have chosen some of the best practises and tryed to implement in some examples.


- Structrure of the code is based on HTML5 principles which says that components should be semantic.
  So we have organized the components in three levels:
   - pages:
     is the folder where rest the components which has knowledge of the structure and the layout of  the page.
   - modules: 
     is the folder where are the components related to data, this components might have a lot of ways to comunicate the data between them, like ContextProvider, store (redux, ...) etc. 
   - components:
     here are the components wchich are only web-components like, they dont have to know about the data in the app, they should only get the data through props.


