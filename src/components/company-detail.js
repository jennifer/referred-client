import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/company-detail.css';

export class CompanyDetail extends React.Component {

  render() {

    const company = this.props.companies.find(
      company => company._id === this.props.match.params.id
    )
    return (
      <div className='detail block content-float'>
        <a href={company.url} target='_blank'>
          <h1>{company.companyName}</h1>
        </a>
        <h2>{company.location}</h2>
        <p>{company.description}</p>
        <p>{company.notes}</p>
        <Link to={`/person-form/${company._id}`} className='italic underline'>Add a Contact Person</Link><br/>
        <Link to={`/company-edit/${company._id}`} className='italic underline'>Edit Company</Link>
        <p>or</p>
        <Link to='/dashboard' className='italic underline'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.network.companies
});

export default connect(mapStateToProps)(CompanyDetail);