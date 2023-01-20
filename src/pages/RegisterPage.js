import { SignUp } from '../AuthComponents/SignUp'
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp></SignUp>
      <p>Or <Link to="/login">log in</Link></p>
    </div>
  )
}

export default RegisterPage
