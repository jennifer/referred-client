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
    let aboutButton;

    if (this.props.loggedIn) {
      logOutButton = (
        <button className='flex link' onClick={() => this.logOut()}>Log out</button>
      );
      aboutButton = (
        <Link to='/about' className='flex link'>About</Link>
      );
    }
    return (
      <div className='flex'>
        <div className='link'>
          <h1 className='app-title'>Referred</h1>
        </div>
        <div>
          { logOutButton }
          { aboutButton }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Nav));