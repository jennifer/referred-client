import React from 'react';
import { connect } from 'react-redux';
import DropdownList from 'react-widgets/lib/DropdownList';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { postPersonData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';
import 'react-widgets/dist/css/react-widgets.css';

export class PersonForm extends React.Component {

  onSubmit(values, id) {
    values.companyId = id;
    this.props.dispatch(postPersonData(values));
    this.props.history.push('/dashboard')
  }

  render() {

    const company = this.props.companies.find(
      company => company._id === this.props.match.params.id
    );
    
    const status = [ 'Identified', 'Made contact', 'Got a response', 'Followed up', 'Got a referral'  ];

    const renderDropdownList = ({ input, data, valueField, textField }) =>
      <DropdownList {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} 
      />

    let error;
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }

    return (
      <div className='block content-float detail form-width'>
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values, company._id))}>
          {error}
          <fieldset className='person-fieldset'>
            <legend>Add a New Person</legend>
            <label htmlFor='status'>Status:</label>
            <Field
              component={renderDropdownList}
              data={status}
              valueField='status'
              textField='value'
              name='status'
              id='status'
            />
            <label htmlFor='name'>Name:</label>
            <Field
              component={Input}
              type='text'
              name='name'
              id='name'
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
            <label htmlFor='notes'>Notes:</label><br/>
            <Field
              component='textarea'
              type='text'
              name='notes'
              id='notes'
              className='textarea form-width'
            />
            <button className='submit-button italic underline highlight margin-top' disabled={this.props.pristine || this.props.submitting}>
              Submit Person
            </button>
          </fieldset>
        </form>
        <p>or</p>
        <Link to={`/company-detail/${company._id}`} className='italic underline highlight'>Go Back</Link>
      </div>
    )
  };
}

const mapStateToProps = state => ({
  companies:state.network.companies
});

PersonForm = reduxForm({
  form: 'person',
  onSubmitFail: (errors, dispatch) => dispatch(focus('person'))
})(PersonForm)

PersonForm = connect(mapStateToProps)(PersonForm);

export default PersonForm