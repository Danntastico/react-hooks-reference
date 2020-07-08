import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

//Use effect, permite ejecutar efectos secundarios
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;
  useEffect(() => {
    console.log('Formstate cambió');
  }, [formState]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Use Effect</h1>
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
      {name === '123' && <Message />}
    </>
  );
};
