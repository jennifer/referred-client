import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompanyForm } from './company-form';
import { PersonForm } from './person-form';
import '../stylesheets/form-wrapper.css'

class formWrapper extends React.Component {

  render() {

    if (type === 'company') {
      return (
        <div className='modal-div'>
          <CompanyForm/>
        </div>
      )
    } else (type === 'person') {
      return (
        <div className='modal-div'>
          <PersonForm/>
        </div>
      )
    }
  }
};

export default formWrapper;

/*
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
*/
