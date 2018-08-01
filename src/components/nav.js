import React from 'react';
import './nav.css';

export default function Nav(props) {
  return(
    <nav>
    	<button className='border-button'>Logout</button>
    	<button className='border-button'>About</button>
    </nav>
  )
};