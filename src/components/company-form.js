import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { postCompanyData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';
import '../stylesheets/company-form.css'

export class CompanyForm extends React.Component {

  onSubmit(values) {
    this.props.dispatch(postCompanyData(values));
    this.props.history.push('/dashboard')
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }
    return (
      <div className='block content-float'>
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
              Submit Company
            </button>
          </fieldset>
        </form>
        <p>or</p>
        <Link to='/dashboard'>Go Back</Link>
      </div>
    )
  };
}

export default reduxForm({
  form: 'company',
  onSubmitFail: (errors, dispatch) => dispatch(focus('company'))
})(CompanyForm);