import React from 'react';
import { shallow } from 'enzyme';

import CompanyCard from '../components/company-card';

describe('<CompanyCard />', () => {
  it('Renders without crashing', () => {
    shallow(<CompanyCard />);
  });
});