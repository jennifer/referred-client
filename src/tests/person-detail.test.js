import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import PersonDetail from '../components/person-detail';

describe('<PersonDetail />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<PersonDetail />
    	</Provider>
    );
  });
});