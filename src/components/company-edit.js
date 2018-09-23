import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { putCompanyData, deleteCompanyData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';


export class CompanyEdit extends React.Component {

  getCompany(){
    return (
      this.props.companies.find(company => company._id === this.props.match.params.id)
    )
  }

  onSubmit(id, values) {
  	let company = this.getCompany();
    values.id = company._id;
    return 
      this.props.dispatch(putCompanyData(values));
      this.props.history.push('/dashboard');
  }

  onDelete(id, values) {
    let company = this.getCompany();
    values.id = company._id;
    return 
      this.props.dispatch(deleteCompanyData(id, values));
      this.props.history.push('/dashboard');
  }

  render () {
    let error;
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }

    const company = this.getCompany();
    const selectedCompany = {
      id: company._id,
      username: company.username,
      companyName: company.companyName,
      url: company.url,
      location: company.location,
      description: company.description,
      notes: company.notes
    }

    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <fieldset className='company-fieldset'>
            <label htmlFor='companyName'>Company name:</label>
            <Field
              component={Input}
              type='text'
              name='companyName'
              id='companyName'
              validate={[required, nonEmpty]}
            />
            <label htmlFor='url'>URL:</label>
            <Field
              component={Input}
              type='url'
              name='url'
              id='url'
              validate={[required, nonEmpty]}
            />
            <label htmlFor='location'>Location:</label>
            <Field
              component={Input}
              type='text'
              name='location'
              id='location'
              validate={[required, nonEmpty]}
            />
            <label htmlFor='description'>Description:</label>
            <Field
              component={Input}
              type='text'
              name='description'
              id='description'
            />
            <label htmlFor='notes'>Notes:</label>
            <Field
              component={Input}
              type='text'
              name='notes'
              id='notes'
            />
            <button className='submit-button' type='submit' disabled={this.props.pristine || this.props.submitting}>
              Submit
            </button>
            <Link to='/dashboard'>Go Back</Link>
          </fieldset>
        </form>
      </div>
    )
  }
};


const mapStateToProps = state => ({
  companies:state.network.companies
});

CompanyEdit = reduxForm({
    form: 'companyEdit',
    onSubmitFail: (errors, dispatch) => dispatch(focus('companyEdit'))
  })(CompanyEdit)

CompanyEdit = connect(mapStateToProps)(CompanyEdit);

export default CompanyEdit