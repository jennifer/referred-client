import React from 'react';
import About from './about';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import '../stylesheets/login-signup-pages.css';


export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='flex-wrapper'>
      <div className='login'>
        <h1 className='margin-bottom'>Log In</h1>
        <LoginForm />
        <p>or </p>
        <Link to='/signup-page' className='italic highlight underline'>Make an account</Link>
      </div>
      <About />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
