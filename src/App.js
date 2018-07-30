import React, { Component } from 'react';
import Nav from './components/nav';
import Board from './components/board';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPencilAlt, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faPencilAlt, faTimes, faCaretDown);

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Board />
      </div>
    )
  }
}

export default App;
