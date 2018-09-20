import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CompanySummary extends React.Component {

  render() {

    return (
      <tr key={this.props.index}>
        <div className='tool-tip'>
          <td>
            <Link to={`/company/${this.props.company._id}`}>
              <h1>{this.props.company.companyName}</h1>
              <p>{this.props.company.location}</p>
              <p>{this.props.company.description}</p>
            </Link>
          </td>
          <span className='tool-tip-text'>View details and add a person</span>
        </div>
        <td>identify</td>
        <td>contact</td>
        <td>response</td>
        <td>followup</td>
        <td>referral</td>
      </tr>
    )
  }
};

export default connect()(CompanySummary);