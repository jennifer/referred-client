import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PersonCard extends React.Component {

  render() {

    return (
	    <div key={this.props.person._id}>
        <Link to={`/person-detail/${this.props.person._id}`}>
          <p>{this.props.person.name}</p>
          <p>{this.props.person.title}</p>
				</Link>
	    </div>
    )
  }
};

export default connect()(PersonCard);