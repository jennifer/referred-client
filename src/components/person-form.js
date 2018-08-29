import React from 'react';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../actions/auth';
import { company } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';
import '../stylesheets/person-form.css'

export class PersonForm extends React.Component {
  onSubmit(values) {
      return this.props.dispatch(person(values));
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
        //onSubmit={this.props.handleSubmit(values =>
        //  this.onSubmit(values)
        //)}
      >
        {error}
        <fieldset className='person-fieldset'>
          <label htmlFor='name'>Name:</label>
          <Field
            component={Input}
            type='text'
            name='personName'
            id='personName'
            validate={[required, nonEmpty]}
          />
          <label htmlFor='title'>Title:</label>
          <Field
            component={Input}
            type='text'
            name='title'
            id='title'
          />
          <label htmlFor='link'>Link:</label>
          <Field
            component={Input}
            type='text'
            name='link'
            id='link'
          />
          <label htmlFor='date'>Date:</label>
          <Field
            component={Input}
            type='text'
            name='date'
            id='date'
          />
          <label htmlFor='notes'>Notes:</label>
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
    )};
}

export default reduxForm({
  form: 'company',
  onSubmitFail: (errors, dispatch) => dispatch(focus('company'))
})(CompanyForm);