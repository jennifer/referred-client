import React from 'react';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../actions/auth';
import { postCompany } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';
import '../stylesheets/company-form.css'

export class CompanyForm extends React.Component {
  onSubmit(values) {
      return this.props.dispatch(postCompany(values));
      console.log(values);
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
      <form
        onSubmit={this.props.handleSubmit(values =>
         this.onSubmit(values)
        )}
      >
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
          <label htmlFor='companyUrl'>URL:</label>
          <Field
            component={Input}
            type='url'
            name='companyUrl'
            id='companyUrl'
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
          <button className='submit-button' disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </fieldset>
      </form>
    )};
}

export default reduxForm({
  form: 'company',
  onSubmitFail: (errors, dispatch) => dispatch(focus('company'))
})(CompanyForm);