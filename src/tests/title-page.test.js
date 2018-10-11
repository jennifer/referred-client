import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';

import TitlePage from '../components/title-page';

describe('<TitlePage />', () => {
  it('Renders without crashing', () => {
    shallow(
    	<Provider store={ store }>
    		<TitlePage />
    	</Provider>
    );
  });
});