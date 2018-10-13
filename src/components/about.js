import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../stylesheets/about.css';

export function About(props) {
	if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }
  return (
  	<div className='block border-left about'>
      <div>
  		<span><h1 className='large-text'>Referred</h1><p className='small-text'>helps you track your job-search network to stay organized and accountable</p></span>
  		<p className='medium-text'>Add a target company, then add your contact person.</p>
  		<p className='small-text'>Track each step of the relationship and </p>
  		<p className='medium-text'>get referred.</p>
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