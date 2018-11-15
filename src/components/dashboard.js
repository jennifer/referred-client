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
        <p role='banner' className='bold help-margins'>Click on <span className='italic'>+ Companies</span> to add a target company.</p>
      )
    }

    else if (this.props.oneCompany && this.props.nullPeople) {
      newUserHelp = (
        <div>
          <p role='banner' className='bold'>Click on a company to view details and add a contact person.</p>
          <p role='banner' className='bold help-margins'>Click on <span className='italic'>+ Companies</span> to add another company.</p>
        </div>
      )
    }

    else if (this.props.oneCompany && this.props.onePerson) {
      newUserHelp = (
        <div>
          <p role='banner' className='bold'>Click on <span className='italic'>+ Companies</span> to add another company.</p>
          <p role='banner' className='bold help-margins'>Click on a person to view details, edit, or change their status.</p>
        </div>
      )
    }

    else if (this.props.onePerson) {
      newUserHelp = (
        <p role='banner' className='bold help-margins'>Click on a person to view details, edit, or change their status.</p>
      )
    }
    
    // Build the table
    return (
      <div className='block content-float'>
        { newUserHelp } 
        <div className='grid-wrapper' role='main'>
          <Link to='/company-form' className='italic company highlight'>+ Companies</Link>
          <h2 className='identify col italic'>Identified <br/> a Person</h2>
          <h2 className='contact col italic'>Initiated <br/> Contact</h2>
          <h2 className='response col italic'>Engaged in <br/>Conversation</h2>
          <h2 className='followup col italic'>Followed <br/> Up</h2>
          <h2 className='referral col italic'>Got a <br/> Referral</h2>
          {this.props.companies.map((company, index) => {
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
    nullPeople: state.referred.people.length === 0,
    oneCompany: state.referred.companies.length === 1,
    onePerson: state.referred.people.length === 1
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));