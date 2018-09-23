import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PersonDetail extends React.Component {

  render() {

    const person = this.props.people.find(
      person => person._id === this.props.match.params.id
    )
    return (
      <div>
        <a href={person.url} target='_blank'>
          <h1>{person.name}</h1>
        </a>
        <h2>{person.url}</h2>
        <p>{person.title}</p>
        <p>{person.status}</p>
        <p>{person.notes}</p>
        <Link to={`/person-edit/${person._id}`}>Edit Person</Link>
        <Link to='/dashboard'>Go Back</Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  people:state.network.people
});

export default connect(mapStateToProps)(PersonDetail);