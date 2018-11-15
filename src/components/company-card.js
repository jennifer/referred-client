import React from 'react';
import { connect } from 'react-redux';
import { getPersonData } from '../actions/referred';
import { Link } from 'react-router-dom';
import PersonCard from './person-card';
import '../stylesheets/company-card.css';

export class CompanyCard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPersonData(this.props.username));
  }

  render() {

    const filteredPeople = this.props.people.filter(person => person.companyId === this.props.company._id);

    return (
      <React.Fragment key={this.props.company._id}>
        <div className='row'></div>
        <div className='company-card highlight'>
          <Link to={`/company-detail/${this.props.company._id}`}>
            <p>{this.props.company.companyName}</p>
            <p>{this.props.company.location}</p>
          </Link>
        </div>

        {filteredPeople.map((person, index) => {
          return (
            <div key={person._id} style={{gridColumnStart: person.statusIndex}} className='person-card highlight'>
              <PersonCard person={person} key={index} index={index} />
            </div>
          )
        })}
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    people: state.referred.people,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(CompanyCard);