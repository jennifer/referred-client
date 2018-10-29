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
      <div role='main' className='detail block content-float'>
        <a href={company.url} target='_blank'><h1 className='italic highlight'>{company.companyName}</h1></a>
        <h2 className='margin-bottom'>{company.location}</h2>
        <p className='margin-bottom'>{company.description}</p>
        <p className='margin-bottom-large'>{company.notes}</p>
        <Link to={`/person-form/${company._id}`} className='italic underline highlight'>Add a Contact Person</Link><br />
        <Link to={`/company-edit/${company._id}`} className='italic underline highlight'>Edit Company</Link>
        <p>or</p>
        <Link to='/dashboard' className='italic underline highlight'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.referred.companies
});

export default connect(mapStateToProps)(CompanyDetail);