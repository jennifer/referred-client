import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

const passwordLength = length({min: 5, max: 72});
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className='block'
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <label htmlFor='username'>Username:</label>
        <Field
          component={Input}
          type='text'
          name='username'
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor='password'>Password:</label>
        <Field
          component={Input}
          type='password'
          name='password'
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor='passwordConfirm'>Confirm Password:</label>
        <Field
          component={Input}
          type='password'
          name='passwordConfirm'
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type='submit'
          disabled={this.props.pristine || this.props.submitting}
          className='italic underline highlight margin-top'
        >
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);
