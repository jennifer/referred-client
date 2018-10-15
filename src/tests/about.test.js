import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import About from '../components/about';

describe('<About />', () => {
  it('Renders without crashing', () => {
  	shallow(
		<Provider store={ store }>
    		<About />
    	</Provider>
    );
  });
});