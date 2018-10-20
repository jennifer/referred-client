import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { postCompanyData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';

export class CompanyForm extends React.Component {

  onSubmit(values) {
    this.props.dispatch(postCompanyData(values));
    this.props.history.push('/dashboard')
  }

  render() {
    let error;
    let newUserHelp;

    if (this.props.nullCompanies) {
      newUserHelp = (
        <p className='bold help-margins'>To get started, add a target company</p>
      )
    }

    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }

    return (
      <div className='detail block content-float form-width'>
        { newUserHelp }
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <fieldset className='company-fieldset'>
          <legend>Add a New Company</legend>
            <label htmlFor='companyName'>Company Name:</label>
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
            <label htmlFor='description'>Description:</label><br/>
            <Field
              component='textarea'
              type='textarea'
              name='description'
              id='description'
              className='textarea desc-textarea form-width'
            />
            <label htmlFor='notes'>Notes:</label><br/>
            <Field
              component='textarea'
              type='text'
              name='notes'
              id='notes'
              className='textarea notes-textarea form-width'
            />
            <button className='submit-button italic underline highlight margin-top' type='submit' disabled={this.props.pristine || this.props.submitting}>
              Submit Company
            </button>
          </fieldset>
        </form>
        <p>or</p>
        <Link to='/dashboard' className='italic underline highlight'>{this.props.nullCompanies ? 'Go to Dashboard' : 'Go Back'}</Link>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    nullCompanies: state.network.companies.length === 0,
  };
};

export default reduxForm({
  form: 'company',
  onSubmitFail: (errors, dispatch) => dispatch(focus('company'))
})(connect(mapStateToProps)(CompanyForm));