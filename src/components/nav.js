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

    let loggedInNav;
    let loggedOutTitle;

    if (this.props.loggedIn) {
      loggedInNav = (
        <React.Fragment>
          <div className='nav block highlight nav-border-right'>
            <Link to= '/about' className='vert referred italic'>Referred.</Link>
          </div>
          <div className='nav block highlight nav-border-right'>
            <a className='vert log-out italic' onClick={() => this.logOut()}>Logout</a>
          </div>
        </React.Fragment>
      );
    }

    else {
      loggedOutTitle = (
        <React.Fragment>
          <p className='vert title'>Referred.</p>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        { loggedOutTitle }
        { loggedInNav }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Nav));