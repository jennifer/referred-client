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

      const filteredPeople = this.props.people.filter(person => person.companyId === this.props.company._id);
      console.log(filteredPeople);

    return (
      <React.Fragment>
        <div key={this.props.index} className='company-card' >
          <Link to={`/company-detail/${this.props.company._id}`}>
            <h1>{this.props.company.companyName}</h1>
            <p>{this.props.company.location}</p>
            <p>{this.props.company.description}</p>
          </Link>
        </div>

        <div>
          {filteredPeople.map((person, index) => {
            return (
              <PersonCard person={person} key={index} index={index} />
            )
          })}
        </div>
      </React.Fragment>
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

/*

style={personCard} 
const personCard = {
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: parseInt(`${this.props.index}`) + 2,
      gridRowEnd: parseInt(`${this.props.index}`) + 3
    };
*/