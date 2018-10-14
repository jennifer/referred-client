import React from 'react';
import About from './about';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../stylesheets/signup-page.css';

import SignupForm from './signup-form';

export function SignupPage(props) {
  if (props.loggedIn) {
    return <Redirect to='/board' />;
  }
  return (
    <React.Fragment>
      <div className='block login-float border-left form-width'>
        <h1>Make an Account</h1>
        <SignupForm />
        <p>or</p>
        <Link to='/' className='italic underline'>Go back to login</Link>
      </div>
      <About />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);