import React from 'react';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import '../stylesheets/detail.css'

export default function Detail(props) {
  return (
    <div className='modal-div'>
      <span className='title-span'>
        <h1 className='modal-header'>Add a company</h1>
        <FontAwesomeIcon icon='times' />
      </span>
      <form>
        <fieldset className='company-fieldset'>
          <legend>
            <label for='company'>Company name:</label>
          </legend>
          <input type='text' name='company' required='' />
          <label for='location'>Location:</label>
          <input type='text' name='location' required='' />
          <label for='description'>Description:</label>
          <input type='text' name='description' required='' />
          <label for='notes'>Notes:</label>
          <input type='text' name='notes' />
        </fieldset>
        <FontAwesomeIcon icon='caret-down' />
        <fieldset>
          <legend>
            <label for='description'>Job title:</label>
          </legend>
          <input type='text' name='description' />
          <label for='description'>Job description:</label>
          <input type='text' name='description' />
          <label for='applied'>Applied date:</label>
          <input type='text' name='applied' />
          <FontAwesomeIcon icon='caret-down' />
        </fieldset>
        <FontAwesomeIcon icon='caret-down' />
        <button type='submit' className='submit-button'>Add company</button>
      </form>
    </div>
  )
}


export class LoginForm extends React.Component {
  onSubmit(values) {
      return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {error}
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Log in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
