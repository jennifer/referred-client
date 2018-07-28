import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faPencilAlt, faTimes);

class App extends Component {
  render() {
    return (
      <div>
        <body>
          <nav>
            <button>Logout</button>
            <button>About</button>
          </nav>
          <main>
            <table>
              <tr>
              {/* These will remain hard-coded */}
                <th>Company
                <div class='tool-tip'><FontAwesomeIcon icon='plus' />
                  <span class='tool-tip-text'>Add a company</span>
                </div>
                </th>
                <th>Identified a person</th>
                <th>Made contact</th>
                <th>Got a response</th>
                <th>Sent a follow-up</th>
                <th>Got a referral!</th>
              </tr>
              <tr>
                {/* This will populate from company-card component */}
                <td>
                  <h1>Sample Company</h1>
                  <p>Denver, CO</p>
                  <p>A great company doing special things</p>
                  <div class='tool-tip'><FontAwesomeIcon icon='plus' />
                    <span class='tool-tip-text'>Add a person</span>
                  </div>
                </td>
                {/* This will populate from person-card component */}
                <td>
                  <h1>Emily Engineer</h1>
                  <p>Full-Stack Developer</p>
                </td> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </main>
        </body>
      </div>
    );
  }
}

export default App;
