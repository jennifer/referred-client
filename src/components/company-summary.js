import React from 'react';
import { connect } from 'react-redux';
import { getCompanyData } from '../actions/network-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheets/company-summary.css'

export default class CompanySummary extends React.Component {
  
  render() {

    return (
      <tr key={this.props.index}>
        <td>
          <h1>{this.props.company.companyName}</h1>
          <p>{this.props.company.location}</p>
          <p>{this.props.company.description}</p>
          <div className='tool-tip'><FontAwesomeIcon icon='plus' />
            <span className='tool-tip-text'>Add a person</span>
          </div>
        </td>
        <td>identify</td>
        <td>contact</td>
        <td>response</td>
        <td>followup</td>
        <td>referral</td>
      </tr>
    )
  }
}

/*
export class CompanySummary extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));

    return (
      return(
      <tr key={props.index}>
        <td>
          <h1>{props.company.name}</h1>
          <p>{props.company.location}</p>
          <p>{props.company.description}</p>
          <div className='tool-tip'><FontAwesomeIcon icon='plus' />
                <span className='tool-tip-text'>Add a person</span>
              </div>
        </td>
        <td>identify</td>
        <td>contact</td>
        <td>response</td>
        <td>followup</td>
        <td>referral</td>
      </tr>
    )
  }
}


const mapStateToProps = state => {
  return {
    //username: state.auth.currentUser.username,
    //companies: state.network.company,
    companyName: state.network.company.companyName,
    url: state.network.company.url,
    location: state.network.company.location,
    description: state.network.company.description,
  };
};


export default connect(mapStateToProps)(CompanySummary);
*/

