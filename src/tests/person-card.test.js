import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import PersonCard from '../components/person-card';

describe('<PersonCard />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<PersonCard />
    	</Provider>
    );
  });
});