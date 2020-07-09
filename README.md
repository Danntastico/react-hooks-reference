# React Hooks!

## Table of Contents

- [General Info](#general-info)
- [technologies](#technologies)
- [setup](#setup)
- [Try it out](#try-it-out)
- [What are React hooks](#what-are-react-hooks)
- [useState](#usestate) 👾
- [useEffect](#useeffect) 🤖
- [useRef](#useref) 🎃
- [useLayoutEffect](#uselayouteffect) 👽
- [useMemo](#usememo) 🍭

## General Info

Hi! In this repository you will find some examples and overviews about Hooks.
I'm gonna include concepts and links to the official documentation and other interesting pages.
👽

## Technologies

Project is created with:

- [Create React App](https://create-react-app.dev/)
- React: ^16.13.1
- Jest: ^4.2.4

## Setup

To run this project, install it locally using npm:

```
$ cd ../hook-app
$ npm install
$ npm start

or using yarn too!
```

## Try it out

To try one of these examples, just go to the directory `index` and replace the first Argument of the `render` function with the component that you want to try.

```javascript
ReactDOM.render(<MemoHook />, document.getElementById('root'));
```

## What are React Hooks

**In simple words**, with React Hooks, we can manage the state and other features by using function components.
Hooks are functions that allows you to use React state and _lifecycles_ from function components.

> _hasta la vista, class components_

#### Rules

- Only _call_ hooks at the _top level_. Never inside loops or conditions.
- Only _call_ hooks from _function components_.

###### Eslint Plugin

There's an ESLint Plugin that enforces those rules. You can install it by using:

```bash
npm install eslint-plugin-react-hooks --save-dev
```

## useState

#### State Hook

We use State Hooks into functional components to add local states to it.

```javascript
//syntax:
const [state, setState] = useState(initialState);
```

Array destructuring provides you of the _current state_ and a function to _update the state_. As an argument to useState we pass the initial state, it could be an object, number, string, what we need.

Find an example of useState [here](./src/components/01-useState)

## useEffect

#### Effect Hook

The Effect Hook is a function that allows you to _perform side effects_ (ops that can affect other components) from a function component.

Example:

```javascript
//This is like componentDidMount and componentDidUpdate
useEffect(() => {
  console.log('React will run this effect after perform updates to the DOM.');
});
```

You can tell to React how to 'clean up' after the effect by returning a function.

```javascript
useEffect(() => {
  window.addEventListener('mousemove', () => {}); //The effect, adds Event
  return () => {
    window.removeEventListener('mousemove', () => {}); //Clean after the effect, removes Event
  };
});
```

You can find some examples of useEffect [here](./src/components/02-useEffect)
