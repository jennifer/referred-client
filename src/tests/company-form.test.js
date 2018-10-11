import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import CompanyForm from '../components/company-form';

describe('<CompanyForm />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={store}>
    		<CompanyForm />
    	</Provider>
    );
  });
});