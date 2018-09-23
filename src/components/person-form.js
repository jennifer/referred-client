import React from 'react';
import { connect } from 'react-redux';
import DropdownList from 'react-widgets/lib/DropdownList';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import { postPersonData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';
import 'react-widgets/dist/css/react-widgets.css';
import '../stylesheets/person-form.css';

export class PersonForm extends React.Component {

  onSubmit(values) {
    const companyId = this.props.companies._id;
    values.companyId = companyId;
    this.props.dispatch(postPersonData(values));
    this.props.history.push('/dashboard');
  }

  render() {

    const company = this.props.companies.find(
      company => company._id === this.props.match.params.id
    )    
    const status = [ 'identified', 'made contact', 'got a response', 'followed up', 'got a referral!'  ];

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
            component={DropdownList}
            data={status}
            valueField='value'
            textField='status'
            name='status'
            id='status'
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
            Submit
          </button>
          <Link to={`/company-detail/${company._id}`}>Go Back</Link>
        </fieldset>
      </form>
    )};
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