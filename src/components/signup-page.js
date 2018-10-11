import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../stylesheets/signup-page.css';

import SignupForm from './signup-form';

export function SignupPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/board' />;
  }
  return (
    <div className='home'>
      <h2>Make an account:</h2>
      <SignupForm />
      <p>or</p>
      <Link to='/' className='italic'>Go back to login</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);