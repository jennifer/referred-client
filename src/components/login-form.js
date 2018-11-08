import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
      return this.props.dispatch(login(values.username, values.password));
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
        className='login-form block'
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {error}
        <label for='username'>Username:</label>
        <Field
          component={Input}
          type='text'
          name='username'
          id='username'
          validate={[required, nonEmpty]}
        />
        <label for='password'>Password:</label>
        <Field
          component={Input}
          type='password'
          name='password'
          id='password'
          validate={[required, nonEmpty]}
        />
        <p className='margin-top'>Demo Account</p>
        <p>+ Username: username</p>
        <p>+ Password: password</p>
        <button disabled={this.props.pristine || this.props.submitting} className='italic underline highlight margin-top'>
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
