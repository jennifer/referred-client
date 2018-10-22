import React from 'react';
import { connect } from 'react-redux';
import DropdownList from 'react-widgets/lib/DropdownList';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { putPersonData, deletePersonData } from '../actions/network-actions';
import { required, nonEmpty } from '../validators';
import 'react-widgets/dist/css/react-widgets.css';

export class PersonEdit extends React.Component {

  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const person = this.props.people.find(
      person => person._id === this.props.match.params.id
    )
    const selectedPerson = {
      id: person._id,
      username: person.username,
      companyId: person.companyId,
      status: person.status,
      name: person.name,
      title: person.title,
      url: person.url,
      notes: person.notes
    }
    this.props.initialize(selectedPerson);
  }

  onSubmit(values, id) {
    values.id = id;
    this.props.dispatch(putPersonData(id, values));
    this.props.history.push('/dashboard');
  }

  deletePerson(id) {
    this.props.dispatch(deletePersonData(id));
    this.props.history.push('/dashboard');
  }

  render() {

    const person = this.props.people.find(
      person => person._id === this.props.match.params.id
    );
    const status = [ 'Identified a Person', 'Initiated Contact', 'Engaged in Conversation', 'Followed Up', 'Got a Referral'  ];

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
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values, person._id))}>
          {error}
          <fieldset>
            <legend>Edit {person.name}</legend>
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
            <button className='italic underline highlight margin-top' disabled={this.props.pristine || this.props.submitting}>
              Submit Changes
            </button>
            <div className='margin-bottom-small'></div>
            <button
              className='italic underline highlight'
              type='button'
              onClick={() => this.deletePerson(person._id)}
            >
              Delete Person
            </button>
          </fieldset>
        </form>
        <p>or</p>
        <Link to={`/person-detail/${person._id}`} className='italic underline highlight'>Go Back</Link>
      </div>
    )};
}

const mapStateToProps = state => ({
  people:state.network.people
});

PersonEdit = reduxForm({
    form: 'personEdit',
    onSubmitFail: (errors, dispatch) => dispatch(focus('personEdit'))
  })(PersonEdit)

PersonEdit = connect(mapStateToProps)(PersonEdit);

export default PersonEdit