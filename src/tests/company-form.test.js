import React from 'react';
import { shallow } from 'enzyme';

import CompanyForm from '../components/company-form';

describe('<CompanyForm />', () => {
  it('Renders without crashing', () => {
    shallow(<CompanyForm />);
  });
});