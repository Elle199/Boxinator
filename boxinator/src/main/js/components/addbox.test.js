/**
 * @author max.angman
 */

import React from 'react';
import { shallow } from 'enzyme';

import CreateBox from './addbox';

describe('Create new box', () => {
    it('view should match snapshot', () => {
        const component = shallow(<CreateBox />);
        expect(component).toMatchSnapshot();
    });
});