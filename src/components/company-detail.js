import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CompanyDetail extends React.Component {

  getCompany(){
    return (
      this.props.companies.find(company => company._id === this.props.match.params.id)
    )
  }

  render() {

    const company = this.getCompany();
    return (
      <div>
        <a href={company.url} target='_blank'>
          <h1>{company.companyName}</h1>
        </a>
        <h2>{company.location}</h2>
        <p>{company.description}</p>
        <p>{company.notes}</p>
        <Link to={`/person-form/${company._id}`}>Add a Person</Link>
        <Link to={`/company-edit/${company._id}`}>Edit Company</Link>
        <Link to='/dashboard'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.network.companies
});

export default connect(mapStateToProps)(CompanyDetail);


/*
  
*/