import React from 'react';
import { connect } from 'react-redux';
import { getCompanyData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class CompanyDetail extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
  }

  render() {

    return (
      <div>
        <Link to='/person-form'>Add a Person</Link>
        <Link to='/board'>Go Back</Link>
      </div>
    )
  }
};

export default connect()(CompanyDetail);

/*

<div>
  <a href={this.props.company.url} target='_blank'>
    <h1>{this.props.company.companyName}</h1>
  </a>
  <p>{this.props.company.location}</p>
  <p>{this.props.company.description}</p>
  <p>{this.props.company.notes}</p>
</div>
*/