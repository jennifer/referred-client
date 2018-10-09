import React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/input';

describe('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input />);
  });
});