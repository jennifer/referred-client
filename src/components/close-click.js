import React from 'react';
import Detail from './detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './add-click.css';
const createReactClass = require('create-react-class');

export default createReactClass({
  onClick: function() {
      this.setState({ showResults: false });
  },
  render: function() {
    return (
      <div>
        <FontAwesomeIcon icon='times' onClick={this.onClick} />
        { this.state.showResults ? <Detail /> : null }
      </div>
    );
  }
});