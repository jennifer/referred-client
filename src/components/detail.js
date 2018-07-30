import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './detail.css';

export default function Detail(props) {
  return (
    <div className='modal-div'>
      <span className='title-span'>
        <h1 className='modal-header'>Add a company</h1>
      </span>
      <form>
        <fieldset className='company-fieldset'>
          <legend>
            <label for='company'>Company name:</label>
          </legend>
          <input type='text' name='company' required='' />
          <label for='location'>Location:</label>
          <input type='text' name='location' required='' />
          <label for='description'>Description:</label>
          <input type='text' name='description' required='' />
          <label for='notes'>Notes:</label>
          <input type='text' name='notes' />
        </fieldset>
        <FontAwesomeIcon icon='caret-down' />
        <fieldset>
          <legend>
            <label for='description'>Job title:</label>
          </legend>
          <input type='text' name='description' />
          <label for='description'>Job description:</label>
          <input type='text' name='description' />
          <label for='applied'>Applied date:</label>
          <input type='text' name='applied' />
          <FontAwesomeIcon icon='caret-down' />
        </fieldset>
        <FontAwesomeIcon icon='caret-down' />
        <button type='submit'>Add company</button>
      </form>
    </div>
  )
}