import React from 'react';
import { shallow } from 'enzyme';

import SignupForm from '../components/signup-form';

describe('<SignupForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SignupForm />);
  });
});