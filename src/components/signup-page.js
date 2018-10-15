import React from 'react';
import About from './about';
import { Link } from 'react-router-dom';

import SignupForm from './signup-form';

export default function SignupPage(props) {
  
  return (
    <React.Fragment>
      <div className='block login-float border-left login-width'>
        <h1 className='margin-bottom'>Make an Account</h1>
        <SignupForm />
        <p>or</p>
        <Link to='/' className='italic underline highlight'>Go back to login</Link>
      </div>
      <About />
    </React.Fragment>
  );
}