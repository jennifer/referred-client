import React from 'react';
import { connect } from 'react-redux';
import { getPersonData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import PersonSummary from './person-summary';

export class CompanySummary extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPersonData(this.props.username));
    this.renderPersonCard(this.props.index)
  }

  renderPersonCard(index) {
    
    const personCard = {
      gridRowStart: `${index}` + 2,
      gridRowEnd:`${index}` + 3
    }
    
    const filterPeople = this.props.people.filter(person => person.companyId === this.props.company._id);
    //console.log(people);
    //console.log(filterPeople);

    if (filterPeople) {
      filterPeople.map((person, index) => {
        return (
          <div className='people' style={personCard} >
            <PersonSummary person={person} key={index} index={index} />
          </div>
        )
      })
    }
  }

  render() {

    return (
      <div className='company-card' key={this.props.index}>
        <Link to={`/company-detail/${this.props.company._id}`}>
          <h1>{this.props.company.companyName}</h1>
          <p>{this.props.company.location}</p>
          <p>{this.props.company.description}</p>
        </Link>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    companies: state.network.companies,
    people: state.network.people,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(CompanySummary);