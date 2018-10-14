import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../stylesheets/nav.css';

export class Nav extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.history.push('/');
  }

  render() {

    let logOutButton;

    if (this.props.loggedIn) {
      logOutButton = (
        <div className='nav block highlight nav-border-right'>
          <a className='vert log-out' onClick={() => this.logOut()}>Logout</a>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className='nav block referred highlight nav-border-right'>
          <h1 className='vert referred'>Referred.</h1>
        </div>
        <div className='nav block highlight nav-border-right'>
          <a href='https://github.com/jennifer/network' target='blank' className='vert github'>Github</a>
        </div>
        { logOutButton }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Nav));