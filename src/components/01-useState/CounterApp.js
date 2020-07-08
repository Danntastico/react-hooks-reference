import React, { useState } from 'react';
import './counter.css';
import PropTypes from 'prop-types';

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 0,
    counter2: 1,
  });
  const { counter1, counter2 } = counter;
  return (
    <>
      <h1> Counter {counter1}</h1>
      <h1> Counter {counter2}</h1>
      <button
        className='btn btn-primary'
        onClick={() => {
          setCounter({ ...counter, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
