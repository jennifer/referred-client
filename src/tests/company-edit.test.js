import React from 'react';
import { shallow } from 'enzyme';

import CompanyEdit from '../components/company-edit';

describe('<CompanyEdit />', () => {
  it('Renders without crashing', () => {
    shallow(<CompanyEdit />);
  });
});