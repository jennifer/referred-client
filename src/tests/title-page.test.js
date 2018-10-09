import React from 'react';
import { shallow } from 'enzyme';

import TitlePage from '../components/title-page';

describe('<TitlePage />', () => {
  it('Renders without crashing', () => {
    shallow(<TitlePage />);
  });
});