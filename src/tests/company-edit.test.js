import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import CompanyEdit from '../components/company-edit';

describe('<CompanyEdit />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<CompanyEdit />
    	</Provider>
    );
  });
});