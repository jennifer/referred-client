import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CompanyDetail extends React.Component {

  getCompany(){
    return (
      this.props.companies.filter(company => company._id === this.props.match.params.id)
    )
  }

  render() {

    let company = this.getCompany();
    return (
      <div>
        <a href={company[0].url} target='_blank'>
          <h1>{company[0].companyName}</h1>
        </a>
        <h2>{company[0].location}</h2>
        <p>{company[0].description}</p>
        <p>{company[0].notes}</p>
        <Link to={`/person-form/${company[0]._id}`}>Add a Person</Link>
        <Link to={`/company-edit/${company[0]._id}`}>Edit Company</Link>
        <Link to='/dashboard'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.network.companies
})

export default connect(mapStateToProps)(CompanyDetail);