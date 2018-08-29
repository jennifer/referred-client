import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hideModal } from '../actions/network-actions';
import { CompanyForm } from './company-form';
import '../stylesheets/popup.css'

/*
const POPUP_FORMS = {
  'LOGIN_FORM': LoginFormPopup,
  'SIGNUP-FORM': SignupFormPopup,
  'COMPANY_FORM': CompanyFormPopup,
  'PERSON-FORM': PersonFormPopup
}
*/

/*
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
          Close
        </button>
      </div>
    )
  }
};

export default Popup;
*/


class Popup extends Component {
  closeModal(){
    if(this.props.item.closeModal){
      this.props.item.closeModal();
      this.props.closeModal(this.props.item);
    } else {
      this.props.closeModal(this.props.item);
    }
  }
  openModal(){
    if(this.props.item.openModal){
      this.props.item.openModal();
      this.props.closeModal(this.props.item);
    }
  }
  render() {
    const { zIndex } = this.props;
    const { type } = this.props.item;
    if (type === 'login') {
      const { content } = this.props.item;
      return (
        <div className='modal-div'>
          <LoginForm />
        </div>
      )
    } else if (type === 'signup') {
      const { content } = this.props.item;
      return (
        <div className='modal-div'>
          <SignupForm/>
        </div>
      )
    } else if (type === 'company') {
      const { content } = this.props.item;
      return (
        <div className='modal-div'>
          <CompanyForm/>
        </div>
      )
    } else (type === 'person') {
      const { content } = this.props.item;
      return (
        <div className='modal-div'>
          <PersonForm/>
        </div>
      )
    }
    return (
        <div></div>
    );
  }
}

export default Popup;

