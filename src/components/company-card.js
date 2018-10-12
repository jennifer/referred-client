import React from 'react';
import { connect } from 'react-redux';
import { getPersonData } from '../actions/network-actions';
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
      <React.Fragment>
        <div className='row'></div>
        <div key={this.props.index} className='company-card' >
          <Link to={`/company-detail/${this.props.company._id}`}>
            <h1 className='link'>{this.props.company.companyName}</h1>
            <p>{this.props.company.location}</p>
            <p>{this.props.company.description}</p>
          </Link>
        </div>

        {filteredPeople.map((person, index) => {
          return (
            <div className='person-card' style={{gridColumnStart: person.statusIndex}}>
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
    people: state.network.people,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(CompanyCard);