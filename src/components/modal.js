import React from 'react';
import CompanyDetail from './company-detail';
import CompanyForm from './company-form';
import CompanySummary from './company-summary';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { openModal, closeModal } from '../actions/network-actions';
import ReactModal from 'react-modal';

export class Modal extends React.Component {
	
  handleOpenModal() {
    this.props.dispatch(openModal());
  }

  handleCloseModal() {
    this.props.dispatch(closeModal());
  }

  render() {

    return (
      <ReactModal isOpen={this.props.openModal} contentLabel='Form to add a company' className='modal'>
        <div className='close-bar'>
          <FontAwesomeIcon icon='times' onClick={this.handleCloseModal.bind(this)} />
        </div>
        <CompanyForm />
      </ReactModal>
    )
  }
}

const mapStateToProps = state => {
  return {
    openModal: state.network.openModal,
  };
};

export default connect(mapStateToProps)(Modal);
