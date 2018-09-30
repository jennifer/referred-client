import React from 'react';
import { connect } from 'react-redux';
import { getPersonData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import PersonSummary from './person-summary';
import '../stylesheets/company-summary.css';
import '../stylesheets/person-summary.css';

export class CompanySummary extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPersonData(this.props.username));
  }

  render() {

    const filterPeople = this.props.people.filter(person => person.companyId === this.props.company._id);

    const personCard = {
      gridRowStart: `${this.props.index}` + 2,
      gridRowEnd:`${this.props.index}` + 3
    };

    return (
      <div>
        <div className='company-card' key={this.props.index}>
          <Link to={`/company-detail/${this.props.company._id}`}>
            <h1>{this.props.company.companyName}</h1>
            <p>{this.props.company.location}</p>
            <p>{this.props.company.description}</p>
          </Link>
        </div>

        <div>
          {filterPeople.map((person, index) => {
            return (
              <div className='people' style={personCard} >
                <PersonSummary person={person} key={index} index={index} />
              </div>
            )
          })}
        </div>
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