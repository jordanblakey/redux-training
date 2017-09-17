# redux-training
A simple photo app that simplifie the core ideas behind Redux, React Router and React.js

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

<hr>
##Core Concepts

#### React Router
React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!

#### Redux Store
A store holds the whole state tree of your application.
The only way to change the state inside it is to dispatch an action on it.

A store is not a class. It's just an object with a few methods on it.
To create it, pass your root reducing function to createStore.

#### Actions
Actions are JS Objects that contain the type of function to be dispatched and the minimum information required to supply arguments to it. Or, Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of reducers.

#### Dispatch

#### Reducers
Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of reducers.

// A reducer takes in 2 things:
// 1. The action
// 2. A copy of the current state
// 3. Returns an updated copy of the store
