import React from 'react';
import About from './about';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import SignupForm from './signup-form';

export function SignupPage(props) {
  if (props.loggedIn) {
    return <Redirect to='/company-form' />;
  }
  return (
    <React.Fragment>
      <About />
      <div className='block login-float border-left login-width'>
        <h1 className='margin-bottom'>Make an account:</h1>
        <SignupForm />
        <p>or</p>
        <Link to='/' className='italic underline highlight'>Go back to login</Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
