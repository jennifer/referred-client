import React from 'react';
import CompanyForm from './company-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { openModal, closeModal } from '../actions/network-actions';
import ReactModal from 'react-modal';
import '../stylesheets/company-summary.css'

export class CompanySummary extends React.Component {

  handleOpenModal() {
    this.props.dispatch(openModal());
  }

  handleCloseModal() {
    this.props.dispatch(closeModal());
  }

  render() {

    return (
      <tr key={this.props.index} onClick={this.handleOpenModal.bind(this)}>
        <td>
          <h1>{this.props.company.companyName}</h1>
          <p>{this.props.company.location}</p>
          <p>{this.props.company.description}</p>
          <div className='tool-tip'><FontAwesomeIcon icon='plus' />
            <span className='tool-tip-text'>Add a person</span>
          </div>
        </td>
        <td>identify</td>
        <td>contact</td>
        <td>response</td>
        <td>followup</td>
        <td>referral</td>
        <ReactModal isOpen={this.props.openModal} contentLabel='Form to add a company' className='modal' >
          <div className='close-bar'>
            <FontAwesomeIcon icon='times' onClick={this.handleCloseModal.bind(this)} />
          </div>
          <CompanyForm />
        </ReactModal>
      </tr>
    )
  }
};

const mapStateToProps = state => {
  return {
    openModal: state.network.openModal,
  };
};

export default connect(mapStateToProps)(CompanySummary);