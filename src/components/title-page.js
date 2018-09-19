import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../stylesheets/title-page.css';

import LoginForm from './login-form';

export function TitlePage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='home'>
      <h2>Login:</h2>
      <LoginForm />
      <p>or </p>
      <Link to='/signup-page'>Make an account</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TitlePage);
