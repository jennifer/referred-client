import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/about.css';

export function About(props) {

  let aboutPageClose;

	if (props.loggedIn) {
    aboutPageClose = (
      <Link to='/dashboard' className='italic underline highlight'>Go back</Link>
    );
  }
  
  return (
    <div className='about-page'>
  		<h1 className='margin-bottom'>Track your job-search network to stay organized and accountable.</h1>
  		<p>Add target companies, identify contact people, and track networking milestones:</p>
      <p>+ Initiate one-on-one contact</p>
      <p>+ Track responses</p>
      <p className='margin-bottom'>+ Follow up</p>
      <h1 className='margin-bottom'>Get Referred.</h1>
      <a href='https://github.com/jennifer/network' target='blank' className='italic highlight underline'>View on Github</a>
      <div className='margin-bottom-small'></div>
      { aboutPageClose }
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(About);