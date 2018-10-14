import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../stylesheets/about.css';

export function About(props) {
	if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className='about-page'>
  		<p>Track your job-search network to stay organized and accountable.</p>
  		<p>Add a target company, then identify a contact person.</p>
  		<p>Track relationship milestones: </p>
      <p>Initiate one-on-one contact</p>
      <p>Get a response</p>
      <p>Follow up with more information</p>
      <p>Get Referred: your contact passes your information to a hiring manager</p>
      <Link to='/dashboard' className='link'>Close</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(About);