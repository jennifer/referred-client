import React from 'react';
import About from './about';
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
    <React.Fragment>
      <About />
      <div className='block right-pane border-left'>
        <h2>Make an account:</h2>
        <SignupForm />
        <p>or</p>
        <Link to='/' className='link'>Go back to login</Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);