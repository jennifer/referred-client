import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { putCompanyData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';


export class CompanyEdit extends React.Component {

  getCompany(){
    return (
      this.props.companies.filter(company => company._id === this.props.match.params.id)
    )
  }

  onSubmit(values) {
  	let company = this.getCompany();
    values.id = company[0]._id;
    return this.props.dispatch(putCompanyData(values));
  }

  render () {

  	let company = this.getCompany();
  	return (
      <div>
    		<p>Edit Company</p>
        <Link to={`/company-detail/${company[0]._id}`}>Go Back</Link>
      </div>
  	)
  }
};

const mapStateToProps = state => ({
  companies:state.network.companies
});

export default 
	connect(mapStateToProps)(CompanyEdit);
	reduxForm({
	  form: 'companyEdit',
	  onSubmitFail: (errors, dispatch) => dispatch(focus('companyEdit'))
	})(CompanyEdit);