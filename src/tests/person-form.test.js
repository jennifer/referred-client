import React from 'react';
import { shallow } from 'enzyme';

import PersonForm from '../components/person-form';

describe('<PersonForm />', () => {
  it('Renders without crashing', () => {
    shallow(<PersonForm />);
  });
});