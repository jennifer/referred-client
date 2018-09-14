import React from 'react';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../actions/auth';
import { postPersonData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';
import '../stylesheets/person-form.css'

export class PersonForm extends React.Component {
  onSubmit(values) {
      return this.props.dispatch(postPersonData(values));
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
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <fieldset className='person-fieldset'>
          <label htmlFor='status'>Status:</label>
          <Field
            component={Input}
            type='text'
            name='status'
            id='status'
            validate={[required, nonEmpty]}
          />
          <label htmlFor='personName'>Name:</label>
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
          <label htmlFor='url'>Link:</label>
          <Field
            component={Input}
            type='url'
            name='url'
            id='url'
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
  form: 'person',
  onSubmitFail: (errors, dispatch) => dispatch(focus('person'))
})(PersonForm);