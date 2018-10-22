import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PersonDetail extends React.Component {

  render() {

    const person = this.props.person.find(
      person => person._id === this.props.match.params.id
    )
    return (
      <div className='block content-float detail'>
        <a href={person.url} target='_blank'><h1 className='italic highlight'>{person.name}</h1></a>
        <h2 className='margin-bottom'>{person.title}</h2>
        <p className='margin-bottom'>{person.status}</p>
        <p className='margin-bottom-large'>{person.notes}</p>
        <Link to={`/person-edit/${person._id}`} className='italic underline highlight'>Edit Person</Link>
        <p>or</p>
        <Link to='/dashboard' className='italic underline highlight'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  person:state.network.people
});

export default connect(mapStateToProps)(PersonDetail);