import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { putCompanyData, deleteCompanyData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';

export class CompanyEdit extends React.Component {

  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const company = this.props.companies.find(
      company => company._id === this.props.match.params.id
    )
    const selectedCompany = {
      id: company._id,
      username: company.username,
      companyName: company.companyName,
      url: company.url,
      location: company.location,
      description: company.description,
      notes: company.notes
    }
    this.props.initialize(selectedCompany);
  }

  onSubmit(values, id) {
    values.id = id;
    this.props.dispatch(putCompanyData(id, values));
    this.props.history.push('/dashboard');
  }

  deleteCompany(id) {
    this.props.dispatch(deleteCompanyData(id));
    this.props.history.push('/dashboard');
  }

  render () {

    const company = this.props.companies.find(
      company => company._id === this.props.match.params.id
    )
    let error;
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }

    return (
      <div className='block content-float detail'>
        <h1>Edit {company.companyName}</h1>
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values, company._id))}>
          {error}
          <fieldset>
            <label htmlFor='companyName'>Company name:</label>
            <Field
              component={Input}
              type='text'
              name='companyName'
              id='companyName'
              validate={[required, nonEmpty]}
            />
            <label htmlFor='url'>URL:</label>
            <Field
              component={Input}
              type='url'
              name='url'
              id='url'
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
            <button className='italic underline' type='submit' disabled={this.props.pristine || this.props.submitting}>
              Submit Changes
            </button><br/>
            <button
              className='italic underline'
              type='button'
              onClick={() => this.deleteCompany(company._id)}
            >
              Delete Company
            </button>
          </fieldset>
        </form>
        <p>or</p>
        <Link to={`/company-detail/${company._id}`} className='italic underline'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.network.companies
});

CompanyEdit = reduxForm({
    form: 'companyEdit',
    onSubmitFail: (errors, dispatch) => dispatch(focus('companyEdit'))
  })(CompanyEdit)

CompanyEdit = connect(mapStateToProps)(CompanyEdit);

export default CompanyEdit