import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './company-card.css'

export default function CompanyCard(props) {
	return(
		<tr>
		  <td key={ props.index }>
		    <h1 key={ props.index }>{props.company.name}</h1>
		    <p key={ props.index }>{props.company.location}</p>
		    <p key={ props.index }>{props.company.description}</p>
		    <div className='tool-tip'><FontAwesomeIcon icon='plus' onClick />
            	<span className='tool-tip-text'>Add a person</span>
          	</div>
		  </td>
		  <td>identify</td>
		  <td>contact</td>
		  <td>response</td>
		  <td>followup</td>
		  <td>referral</td>
		</tr>
)}