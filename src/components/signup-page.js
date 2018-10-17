import React from 'react';
import About from './about';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SignupForm from './signup-form';
import '../stylesheets/login-signup-pages.css';

export function SignupPage(props) {
  if (props.loggedIn) {
    return <Redirect to='/company-form' />;
  }
  return (
    <div className='flex-wrapper'>
      <div className='login'>
        <h1 className='margin-bottom'>Make an account:</h1>
        <SignupForm />
        <p>or</p>
        <Link to='/' className='italic underline highlight'>Go back to login</Link>
      </div>
      <About />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
