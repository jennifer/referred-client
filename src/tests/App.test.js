import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});