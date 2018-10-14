import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CompanyDetail extends React.Component {

  render() {

    const company = this.props.companies.find(
      company => company._id === this.props.match.params.id
    )
    return (
      <div className='block content-float'>
        <a href={company.url} target='_blank'>
          <h1>{company.companyName}</h1>
        </a>
        <h2>{company.location}</h2>
        <p>{company.description}</p>
        <p>{company.notes}</p>
        <Link to={`/person-form/${company._id}`} className='link'>Add a Person</Link>
        <Link to={`/company-edit/${company._id}`} className='link'>Edit Company</Link>
        <Link to='/dashboard' className='link'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.network.companies
});

export default connect(mapStateToProps)(CompanyDetail);