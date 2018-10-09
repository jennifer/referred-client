import React from 'react';
import { shallow } from 'enzyme';

import PersonDetail from '../components/person-detail';

describe('<PersonDetail />', () => {
  it('Renders without crashing', () => {
    shallow(<PersonDetail />);
  });
});