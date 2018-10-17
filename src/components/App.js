import React from 'react';
import About from './about';
import Dashboard from './dashboard';
import CompanyDetail from './company-detail';
import CompanyEdit from './company-edit';
import CompanyForm from './company-form';
import { connect } from 'react-redux';
import Nav from './nav';
import PersonDetail from './person-detail';
import PersonEdit from './person-edit';
import PersonForm from './person-form';
import { refreshAuthToken } from '../actions/auth';
import { Route, withRouter } from 'react-router-dom';
import SignupPage from './signup-page';
import LoginPage from './login-page';
import '../stylesheets/App.css';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className='app'>
        <Nav />
        <Route exact path='/about' component={ About } />
        <Route exact path='/dashboard' component={ Dashboard } />
        <Route exact path='/company-detail/:id' component={ CompanyDetail } />
        <Route exact path='/company-edit/:id' component={ CompanyEdit } />
        <Route exact path='/company-form' component={ CompanyForm } />
        <Route exact path='/person-detail/:id' component={ PersonDetail } />
        <Route exact path='/person-edit/:id' component={ PersonEdit } />      
        <Route exact path='/person-form/:id' component={ PersonForm } />
        <Route exact path='/signup-page' component={ SignupPage } />
        <Route exact path='/' component={ LoginPage } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
