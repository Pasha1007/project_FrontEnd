import {Form} from './Form';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';

const SignUp = () => {
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password).then(console.log).catch(console.error)
    }
  return (
   
      <Form
      title = "register"
      handleClick={handleRegister}
      />
    
  )
}

export {SignUp}
