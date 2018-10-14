import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../stylesheets/login-page.css';

import LoginForm from './login-form';
import About from './about';

export function LoginPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <React.Fragment>
      <div className='block login-float border-left login-width'>
        <h1 className='margin-bottom'>Log In</h1>
        <LoginForm />
        <p>or </p>
        <Link to='/signup-page' className='italic highlight underline'>Make an account</Link>
      </div>
      <About />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
