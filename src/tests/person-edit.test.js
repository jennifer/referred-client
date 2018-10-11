import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import PersonEdit from '../components/person-edit';

describe('<PersonEdit />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<PersonEdit />
    	</Provider>
    )
  });
});