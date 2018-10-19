import React from 'react';
import CompanyCard from './company-card';
import { connect } from 'react-redux';
import { getCompanyData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import '../stylesheets/dashboard.css';

export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
  }

  render() {

    let newUserHelp;

    if (this.props.nullCompanies && this.props.nullPeople) {
      newUserHelp = (
        <p className='bold help-margins'>Click on <span className='italic'>+ Companies</span> to add a target company</p>
      )
    }

    if (this.props.nullCompanies === false && this.props.nullPeople) {
      newUserHelp = (
        <p className='bold help-margins'>Click on {this.props.companies[0].companyName} to view details and add a contact person</p>
      )
    }

    return (
      <div className='block content-float'>
        { newUserHelp } 
        <div className='grid-wrapper'>
          <Link to='/company-form' className='italic company highlight'>+ Companies</Link>
          <h2 className='identify col italic'>Identified <br/> a Person</h2>
          <h2 className='contact col italic'>Made <br/> Contact</h2>
          <h2 className='response col italic'>Got a <br/> Response</h2>
          <h2 className='followup col italic'>Followed <br/> Up</h2>
          <h2 className='referral col italic'>Got a <br/> Referral</h2>
          {this.props.companies.map((company, index) => {
            return (
              <CompanyCard company={company} key={index} index={index}/>
            )
          })}
        </div> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.network.companies,
    username: state.auth.currentUser.username,
    nullCompanies: state.network.companies.length === 0,
    nullPeople: state.network.people.length === 0
  };
};

export default connect(mapStateToProps)(Dashboard);