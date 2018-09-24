import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PersonSummary extends React.Component {

  render() {

    return (
	    <div key={this.props.index} >
        <Link to={`/person-detail/${this.props.person._id}`}>
          <h1>{this.props.person.name}</h1>
          <p>{this.props.person.title}</p>
				</Link>
	    </div>
    )
  }
};

export default connect()(PersonSummary);

/*
<div className='tool-tip' key={this.props.index}>
  <Link to={`/person-detail/${this.props.person._id}`}>
    <h1>{this.props.person.name}</h1>
    <p>{this.props.person.title}</p>
	</Link>
  <span className='tool-tip-text'>View and edit person details</span>
</div>
*/