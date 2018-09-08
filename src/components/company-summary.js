import React from 'react';
import { getCompanyData } from '../actions/network-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheets/company-summary.css'

export default function CompanyCard(props) {
	return(
		<tr key={props.index}>
		  <td>
		    <h1>{props.company.name}</h1>
		    <p>{props.company.location}</p>
		    <p>{props.company.description}</p>
		    <div className='tool-tip'><FontAwesomeIcon icon='plus' />
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