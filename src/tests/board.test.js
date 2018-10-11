import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import Board from '../components/board';

describe('<Board />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<Board />
    	</Provider>
    );
  });
});