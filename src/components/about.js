import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/about.css';

export function About(props) {

  let aboutPageClose;

	if (props.loggedIn) {
    aboutPageClose = (
      <Link to='/dashboard' className='italic underline highlight'>Go to Dashboard</Link>
    );
  }
  
  return (
    <div className='about-page' style={props.loggedIn ? {display:'inline-block', position:'absolute'} : {}}>
  		<h1 className='margin-bottom'>Track your job-search network to stay organized and accountable.</h1>
  		<p className='margin-bottom'>Add target companies and track networking milestones:</p>
      <ul>
        <li><span className='bold'>Identify</span> a person to contact - check your social or alumni network for connections.</li>
        <li><span className='bold'>Initiate</span> contact with your target person.</li>
        <li><span className='bold'>Engage</span> them in conversation. Learn about the company and tell them about yourself.</li>
        <li className='margin-bottom'><span className='bold'>Follow up</span> to build the relationship and learn about open positions.</li>
      </ul>
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