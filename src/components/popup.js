import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hideModal } from '../actions/network-actions';
import '../stylesheets/popup.css'

class Popup extends React.Component {

  handleHideModal() {
    this.props.dispatch(hideModal());
  }

  render() {

    return (
      <div className='modal-div'>
        <span className='title-span'>
          <h1 className='modal-header'>Add a company</h1>
          <FontAwesomeIcon icon='times' />
        </span>
        <CompanyForm />
        <button
          className='modal-button'
          aria-label='close'
          onClick={() => this.handleHideModal()}
        >
          <Close />
        </button>
      </div>
    )
  }
};

export default (connect(handleHideModal)(Popup);