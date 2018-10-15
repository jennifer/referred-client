import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import LoginPage from '../components/login-page';

describe('<LoginPage />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<LoginPage />
    	</Provider>
    );
  });
});