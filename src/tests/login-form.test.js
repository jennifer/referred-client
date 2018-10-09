import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../components/login-form';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  });
});