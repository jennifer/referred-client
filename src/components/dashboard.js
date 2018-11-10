import React from 'react';
import CompanyCard from './company-card';
import { connect } from 'react-redux';
import { getCompanyData } from '../actions/referred';
import { Link } from 'react-router-dom';
import requiresLogin from "./requires-login";
import '../stylesheets/dashboard.css';

export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
  }

  render() {

    // Give instructions for new users
    let newUserHelp;

    if (this.props.nullCompanies && this.props.nullPeople) {
      newUserHelp = (
        <p role='banner' className='bold help-margins'>Click on <span className='italic'>+ Companies</span> to add a target company</p>
      )
    }

    if (this.props.nullCompanies === false && this.props.nullPeople) {
      newUserHelp = (
        <p role='banner' className='bold help-margins'>Click on a company to view details and add a contact person</p>
      )
    }

    // Sort companies alphabetically by name
    const companyArray = this.props.companies.sort((a, b) => {
      let companyA=a.companyName.toLowerCase(), companyB=b.companyName.toLowerCase();
      if (companyA < companyB)
        return -1;
      if (companyA > companyB)
        return 1;
      return 0;
    });

    // Build the table
    return (
      <div className='block content-float'>
        { newUserHelp } 
        <div className='grid-wrapper' role='main'>
          <Link to='/company-form' scope='col' className='italic company highlight'>+ Companies</Link>
          <h2 scope='col' className='identify col italic'>Identified <br/> a Person</h2>
          <h2 scope='col' className='contact col italic'>Initiated <br/> Contact</h2>
          <h2 scope='col' className='response col italic'>Engaged in <br/>Conversation</h2>
          <h2 scope='col' className='followup col italic'>Followed <br/> Up</h2>
          <h2 scope='col' className='referral col italic'>Got a <br/> Referral</h2>
          {companyArray.map((company, index) => {
            return (
              <CompanyCard company={company} key={index} index={index} />
            );
          })}
        </div> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.referred.companies,
    username: state.auth.currentUser.username,
    nullCompanies: state.referred.companies.length === 0,
    nullPeople: state.referred.people.length === 0
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));