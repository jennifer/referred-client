import React from 'react';
import { shallow } from 'enzyme';

import Board from '../components/board';

describe('<Board />', () => {
  it('Renders without crashing', () => {
    shallow(<Board />);
  });
});