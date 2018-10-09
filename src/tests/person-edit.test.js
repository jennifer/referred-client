import React from 'react';
import { shallow } from 'enzyme';

import PersonEdit from '../components/person-edit';

describe('<PersonEdit />', () => {
  it('Renders without crashing', () => {
    shallow(<PersonEdit />);
  });
});