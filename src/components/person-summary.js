import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PersonSummary extends React.Component {

  render() {

    return (
	    <div className='tool-tip' key={this.props.index}>
	      <td>
	        <Link to={`/person-detail/${this.props.person._id}`}>
	          <h1>{this.props.person.personName}</h1>
	          <p>{this.props.person.location}</p>
	          <p>{this.props.person.description}</p>
	        </Link>
	      </td>
	      <span className='tool-tip-text'>View and edit person details</span>
	    </div>
    )
  }
};

export default connect()(PerosnSummary);