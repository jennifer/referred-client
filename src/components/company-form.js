import React from 'react';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import '../stylesheets/company-form.css'

export class CompanyForm extends React.Component {
  onSubmit(values) {
      return this.props.dispatch(company(values));
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
          <label htmlFor='company-name'>Company name:</label>
          <Field
            component={Input}
            type='text'
            name='company-name'
            id='company-name'
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
          <label htmlFor='location'>Description:</label>
          <Field
            component={Input}
            type='text'
            name='Description'
            id='Description'
            validate={[required, nonEmpty]}
          />
          <label htmlFor='location'>Notes:</label>
          <Field
            component={Input}
            type='text'
            name='notes'
            id='notes'
          />
          <button className='submit-button' disabled={this.props.pristine || this.props.submitting}>
            Add company
          </button>
        </fieldset>
      </form>
  });
}

export default reduxForm({
  form: 'company',
  onSubmitFail: (errors, dispatch) => dispatch(focus('company'))
})(CompanyForm);