import React from 'react';
import { connect } from 'react-redux';
import { getPersonData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import PersonCard from './person-card';
import '../stylesheets/company-card.css';

export class CompanySummary extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPersonData(this.props.username));
  }

  render() {

    const personCard = {
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: `${this.props.index}` + 2,
      gridRowEnd:`${this.props.index}` + 3
    };

    const filterPeople = this.props.people.filter(person => person.companyId === this.props.company._id);

    return (
      <div className='company-card' >
        <div key={this.props.index} style={personCard}>
          <Link to={`/company-detail/${this.props.company._id}`}>
            <h1>{this.props.company.companyName}</h1>
            <p>{this.props.company.location}</p>
            <p>{this.props.company.description}</p>
          </Link>
        </div>
        {filterPeople.map((person, index) => {
          return (
            <PersonCard person={person} key={index} index={index} />
          )
        })}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    people: state.network.people,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(CompanySummary);