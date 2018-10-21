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
        <a href={company.url} target='_blank' className='margin-bottom highlight'>
          <h1>{company.companyName}</h1>
        </a>
        <h2 className='margin-bottom'>{company.location}</h2>
        <a href={company.url} target='_blank' className='margin-bottom italic underline highlight'>View Website</a>
        <p className='margin-bottom'>{company.description}</p>
        <p className='margin-bottom'>{company.notes}</p>
        <Link to={`/person-form/${company._id}`} className='italic underline highlight'>Add a Contact Person</Link>
        <div className='margin-bottom-small'></div>
        <Link to={`/company-edit/${company._id}`} className='italic underline highlight'>Edit Company</Link>
        <p>or</p>
        <Link to='/dashboard' className='italic underline highlight'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.network.companies
});

export default connect(mapStateToProps)(CompanyDetail);