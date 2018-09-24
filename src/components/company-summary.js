import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CompanySummary extends React.Component {

  render() {
    return (
      <div key={this.props.index}>
        <Link to={`/company-detail/${this.props.company._id}`}>
          <h1>{this.props.company.companyName}</h1>
          <p>{this.props.company.location}</p>
          <p>{this.props.company.description}</p>
        </Link>
      </div>
    )
  }
};

export default connect()(CompanySummary);