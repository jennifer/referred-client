import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

export function About(props) {
	if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }
  return (
  	<div className='flex'>
      <div>
  		<h1>Referred helps you track your job-search network to stay organized and accountable</h1>
  		<p>Add a target company, then add your contact person.</p>
  		<p>Track each step of the relationship and </p>
  		<p>get referred.</p>
      <a href='https://github.com/jennifer/network' className='link'>Github</a>
      <Link to='/dashboard' className='link'>Close</Link>
      </div>
  	</div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(About);