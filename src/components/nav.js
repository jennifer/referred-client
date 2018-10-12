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
        <span className='nav block'>
          <button className='link vert' onClick={() => this.logOut()}>Log out</button>
        </span>
      );
      aboutButton = (
        <span className='nav block'>
          <div className='vert' >
            <Link className='link' to='/about'>About</Link>
          </div>
        </span>
      );
    }
    return (
      <React.Fragment>
        <div className='nav block'>
          <h1 className='link vert'>Referred</h1>
        </div>
        { logOutButton }
        { aboutButton }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Nav));