import React from 'react';
import { shallow } from 'enzyme';

import CompanyDetail from '../components/company-detail';

describe('<CompanyDetail />', () => {
  it('Renders without crashing', () => {
    shallow(<CompanyDetail
    />);
  });
});