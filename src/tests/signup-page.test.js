import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import SignupPage from '../components/signup-page';

describe('<SignupPage />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<SignupPage />
    	</Provider>
    );
  });
});