import React from 'react';
import CompanySummary from './company-summary';
import PersonSummary from './person-summary';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCompanyData } from '../actions/network-actions';
import { getPersonData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import '../stylesheets/board.css';

export class Board extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
    this.props.dispatch(getPersonData(this.props.username));
  }

  render() {

    return (
      <div>
        
        <table>
          <tbody>
            <tr>
              <th>Company
                <Link to='/company-form'>
                  <div className='tool-tip'><FontAwesomeIcon icon='plus' />
                    <span className='tool-tip-text'>Add a company</span>
                  </div>
                </Link>
              </th>
              <th className='identify' scope='col' index='0'>Identified a person</th>
              <th className='contact' scope='col' index='1'>Made contact</th>
              <th className='response' scope='col' index='2'>Got a response</th>
              <th className='followup' scope='col' index='3'>Sent a follow-up</th>
              <th className='referral' scope='col' index='4'>Got a referral!</th>
            </tr>
            {this.props.companies.map(function(company, index){
              // const filterPeople = people.filter(person => person.company === company.name && person.status === 1);
              return (
                <CompanySummary company={company} key={index} index={index} />
              )
            })}
            {this.props.people.map(function(person, index){
              return (
                <PersonSummary person={person} key={index} index={index} />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    companies: state.network.companies,
    people: state.network.people,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(Board);