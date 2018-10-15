import React from 'react';
import CompanyCard from './company-card';
import { connect } from 'react-redux';
import { getCompanyData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import '../stylesheets/board.css';

export class Board extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
  }

  render() {

    return (
      <div className='block content-float'>
        <div className='grid-wrapper'>
          <Link to='/company-form' className='italic company highlight'>+ Companies</Link>
          <h1 className='identify col italic'>Identified <br/> a Person</h1>
          <h1 className='contact col italic'>Made <br/> Contact</h1>
          <h1 className='response col italic'>Got a <br/> Response</h1>
          <h1 className='followup col italic'>Followed <br/> Up</h1>
          <h1 className='referral col italic'>Got a <br/> Referral</h1>
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
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(Board);