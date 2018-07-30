import React from 'react';
import Detail from './detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './add-click.css';
const createReactClass = require('create-react-class');

export default createReactClass({
  getInitialState: function() {
      return { showModal: false };
  },
  onClick: function() {
      this.setState({ showModal: true });
  },
  render: function() {
    return (
      <div>
        <div className='tool-tip'><FontAwesomeIcon icon='plus' onClick={this.onClick} />
          <span className='tool-tip-text'>Add a company</span>
        </div>
        { this.state.showModal ? <Detail /> : null }
      </div>
    );
  }
});
