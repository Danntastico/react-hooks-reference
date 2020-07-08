import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Use Effect </h1>
        <hr />
        <div>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type='text'
            name='email'
            className='form-control'
            placeholder='email@mail.com'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='password'
            autoComplete='off'
            value={password}
            onChange={handleInputChange}
          ></input>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
