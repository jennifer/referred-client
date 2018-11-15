import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { postCompanyData } from '../actions/referred';
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
        <p className='bold help-margins'>To get started, add a target company:</p>
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
      <div role='main' className='detail block content-float form-width'>
        { newUserHelp }
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <fieldset className='company-fieldset'>
          <legend><h1>Add a New Company</h1></legend>
            <label htmlFor='companyName'>Company Name:</label>
            <Field
              component={Input}
              type='text'
              name='companyName'
              id='companyName'
              placeholder='Where do you want to work?'
              validate={[required, nonEmpty]}
            />
            <label htmlFor='url'>URL:</label>
            <Field
              component={Input}
              type='url'
              name='url'
              id='url'
              placeholder='What is their website or careers page?'
              validate={[required, nonEmpty]}
            />
            <label htmlFor='location'>Location:</label>
            <Field
              component={Input}
              type='text'
              name='location'
              id='location'
              placeholder='Where are they located?'
              validate={[required, nonEmpty]}
            />
            <label htmlFor='description'>Description:</label><br/>
            <Field
              component='textarea'
              type='textarea'
              name='description'
              id='description'
              placeholder='What do they do - insustry, product, service?'
              className='textarea desc-textarea form-width'
            />
            <label htmlFor='notes'>Notes:</label><br/>
            <Field
              component='textarea'
              type='text'
              name='notes'
              id='notes'
              placeholder='What else do you know about them - hiring, culture, events?'
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
    nullCompanies: state.referred.companies.length === 0,
  };
};

export default reduxForm({
  form: 'company',
  onSubmitFail: (errors, dispatch) => dispatch(focus('company'))
})(connect(mapStateToProps)(CompanyForm));