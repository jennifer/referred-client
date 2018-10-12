import React from 'react';
import { shallow } from 'enzyme';

import About from '../components/about';

describe('<About />', () => {
  it('Renders without crashing', () => {
    shallow(<About />);
  });
});