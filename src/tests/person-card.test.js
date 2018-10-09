import React from 'react';
import { shallow } from 'enzyme';

import PersonCard from '../components/person-card';

describe('<PersonCard />', () => {
  it('Renders without crashing', () => {
    shallow(<PersonCard />);
  });
});