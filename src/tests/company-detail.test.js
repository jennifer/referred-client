import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import CompanyDetail from '../components/company-detail';

describe('<CompanyDetail />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<CompanyDetail/>
    	</Provider>
    );
  });
});