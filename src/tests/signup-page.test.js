import React from 'react';
import { shallow } from 'enzyme';

import SignupPage from '../components/signup-page';

describe('<SignupPage />', () => {
  it('Renders without crashing', () => {
    shallow(<SignupPage />);
  });
});