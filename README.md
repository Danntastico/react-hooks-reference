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

## useState

#### State Hook

We add State Hooks into functional components to add local states to it.

```javascript
//syntax:
const [state, setState] = useState(initialState);
```

Array destructuring provides you of the _current state_ and a function to _update the state_. As an argument to useState, we pass the initial state, it could be an object, number, string, what we need.

Find an example of useState [here](./src/components/01-useState)
