import React from 'react';
import { shallow } from 'enzyme';

import Index from '../index';

describe('<Index />', () => {
  it('Renders without crashing', () => {
    shallow(<Index />);
  });
});