import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import PersonForm from '../components/person-form';

describe('<PersonForm />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<PersonForm />
    	</Provider>
    	);
  });
});