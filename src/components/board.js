import React from 'react';
import CompanyCard from './company-card';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCompanyData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import '../stylesheets/board.css';

export class Board extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
  }

  render() {

    return (
      <div className='block right-pane'>
        <div className='grid-wrapper'>
          <Link to='/company-form' className='link company'>Companies +</Link>
          <div className='identify col'>Identified a person</div>
          <div className='contact col'>Made contact</div>
          <div className='response col'>Got a response</div>
          <div className='followup col'>Followed up</div>
          <div className='referral col'>Got a referral</div>
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