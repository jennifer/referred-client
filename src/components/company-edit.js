import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { putCompanyData, deleteCompanyData } from '../actions/referred';
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
      <div role='main' className='block content-float detail form-width'>
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values, company._id))}>
          {error}
          <fieldset>
          <legend><h1>Edit {company.companyName}</h1></legend>
            <label for='companyName'>Company name:</label>
            <Field
              component={Input}
              type='text'
              name='companyName'
              id='companyName'
              validate={[required, nonEmpty]}
            />
            <label for='url'>URL:</label>
            <Field
              component={Input}
              type='url'
              name='url'
              id='url'
              validate={[required, nonEmpty]}
            />
            <label for='location'>Location:</label>
            <Field
              component={Input}
              type='text'
              name='location'
              id='location'
              validate={[required, nonEmpty]}
            />
            <label for='description'>Description:</label><br/>
            <Field
              component='textarea'
              type='textarea'
              name='description'
              id='description'
              className='textarea desc-textarea form-width'
            />
            <label for='notes'>Notes:</label><br/>
            <Field
              component='textarea'
              type='textarea'
              name='notes'
              id='notes'
              className='textarea notes-textarea form-width'
            />
            <button className='italic underline highlight margin-top' type='submit' disabled={this.props.pristine || this.props.submitting}>
              Submit Changes
            </button>
            <div className='margin-bottom-small'></div>
            <button
              className='italic underline highlight'
              type='button'
              onClick={() => this.deleteCompany(company._id)}
            >
              Delete Company
            </button>
          </fieldset>
        </form>
        <p>or</p>
        <Link to={`/company-detail/${company._id}`} className='italic underline highlight'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  companies:state.referred.companies
});

CompanyEdit = reduxForm({
    form: 'companyEdit',
    onSubmitFail: (errors, dispatch) => dispatch(focus('companyEdit'))
  })(CompanyEdit)

CompanyEdit = connect(mapStateToProps)(CompanyEdit);

export default CompanyEdit