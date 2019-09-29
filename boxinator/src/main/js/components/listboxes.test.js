import React from 'react';
import { shallow } from 'enzyme';

import BoxList from './listboxes';

describe('BoxList', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<BoxList debug />);

        expect(component).toMatchSnapshot();
    });
});