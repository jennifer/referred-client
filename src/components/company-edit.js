import React from 'react';
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
    values.companyId = this.getCompany();
    return this.props.dispatch(putCompanyData(values));
  }

  render () {

  	return (
  		<p>Edit Company</p>
  	)
  }
}

export default reduxForm({
  form: 'companyEdit',
  onSubmitFail: (errors, dispatch) => dispatch(focus('companyEdit'))
})(CompanyEdit);