# github_search React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). with **TypeScript**

Insall all packages with `npm i`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About the repository

- Search for the github repositories
- React app with **TypeScript**
- Used **Redux Saga** for state managment
- EsLint with Airbnb style 
- lodash debouncing
- Search character should be min 3
- debouncing time is 300ms

### Components

- Card:- to show information of repositories
- Navigation :- app navigation bar
- Repositories :- Listing of repositories, here listing data susbcribed from saga state  

### store

- Used redux saga to manage state, created repositories folder to add all logics into it.
- In repositories added actions, reducers, types file and saga.ts file to call apis and dispatch according to response.
- In store base folder added actionTypes to add all actions, index file to make middleware , reducer file to combine reducers and saga file make a combile rootSaga.

### types
- added IRepository type for Repository object
