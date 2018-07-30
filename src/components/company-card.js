import React from 'react';
import AddClick from './add-click';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './company-card.css'

export default function CompanyCard(props) {
	return(
		<tr>
		  <td key={ props.index }>
		    <h1 key={ props.index }>{props.company.name}</h1>
		    <p key={ props.index }>{props.company.location}</p>
		    <p key={ props.index }>{props.company.description}</p>
		    <AddClick />
		  </td>
		  <td>identify</td>
		  <td>contact</td>
		  <td>response</td>
		  <td>followup</td>
		  <td>referral</td>
		</tr>
)}