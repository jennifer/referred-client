import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CompanyDetail extends React.Component {

  render() {

    return (
      <div>
        <Link to='/person-form'>Add a Person</Link>
        <Link to='/dashboard'>Go Back</Link>
      </div>
    )
  }
};

export default connect()(CompanyDetail);

/*

<div>
  <a href={state.company.url} target='_blank'>
    <h1>{this.props.company.companyName}</h1>
  </a>
  <p>{this.props.company.location}</p>
  <p>{this.props.company.description}</p>
  <p>{this.props.company.notes}</p>
</div>
*/