import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import CompanyCard from '../components/company-card';

describe('<CompanyCard />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<CompanyCard />
    	</Provider>
    );
  });
});