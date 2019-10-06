/**
 * @author max.angman
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateBox from './addbox';

describe('Create new box', () => {
    it('view should match snapshot', () => {
        const component = shallow(<CreateBox />);
        expect(component).toMatchSnapshot();
    });
});

describe('Submit box', () => {
    it('should validate input fields to ture', () => {
        const component = mount(<CreateBox />);
        let inputs = component.getDOMNode().getElementsByTagName('input');
        const selectField = component.getDOMNode().getElementsByTagName('select')[0];

        // Set input values
        inputs[0].value = "Max";
        inputs[1].value = "50";
        inputs[2].value = "#ff081f";
        selectField.value = "Sweden";
        inputs[4].value = "65";

        expect(component.instance().validateInputs()).toEqual(true);
    });

    // Receiver name (input[0]) should not be allowed to be empty
    // and should therefore result in a failing validate
    it('should validate input fields to false because of "receiver name"', () => {
        const component = mount(<CreateBox />);
        let inputs = component.getDOMNode().getElementsByTagName('input');
        const selectField = component.getDOMNode().getElementsByTagName('select')[0];

        // Set input values
        inputs[0].value = ""; // Target
        inputs[1].value = "50";
        inputs[2].value = "#ff081f";
        selectField.value = "Sweden";
        inputs[4].value = "65";

        expect(component.instance().validateInputs()).toEqual(false);
    });

    // Weight (input[1]) should not be allowed to be 0 or bellow
    // and should therefore result in a failing validation
    it('should validate input fields to false because of "weight"', () => {
        const component = mount(<CreateBox />);
        let inputs = component.getDOMNode().getElementsByTagName('input');
        const selectField = component.getDOMNode().getElementsByTagName('select')[0];

        // Set input values
        inputs[0].value = "Max";
        inputs[1].value = "-20"; // Target
        inputs[2].value = "#ff081f";
        selectField.value = "Sweden";
        inputs[4].value = "65";

        expect(component.instance().validateInputs()).toEqual(false);

        inputs[1].value = "0"; // Target
        expect(component.instance().validateInputs()).toEqual(false);
    });

    // Color (input[2]) has to be changed from default (black, #000000)
    // or else result in a failing validation
    it('should validate input fields to false because of "color"', () => {
        const component = mount(<CreateBox />);
        let inputs = component.getDOMNode().getElementsByTagName('input');
        const selectField = component.getDOMNode().getElementsByTagName('select')[0];

        // Set input values
        inputs[0].value = "Max";
        inputs[1].value = "50";
        inputs[2].value = "#000000"; // Target
        selectField.value = "Sweden";
        inputs[4].value = "65";

        expect(component.instance().validateInputs()).toEqual(false);
    });
});