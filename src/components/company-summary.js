import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class CompanySummary extends React.Component {

  render() {

    return (
      <Link to='/company-detail'>
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
      </Link>
    )
  }
};

export default connect()(CompanySummary);