/**
 * @author max.angman
 */

import React from 'react';
import { shallow } from 'enzyme';

import { BoxList, Box } from './listboxes'

describe('BoxList', () => {
    it('should create empty table', () => {
        const component = shallow(<BoxList />);
        component.state = {
            boxes: [{
                "receiverName": "Max",
                "weight": "50",
                "color": "(255,255,100)",
                "destination": "Sweden",
                "shippingCost": "65"
            }]
        };

        expect(component).toMatchSnapshot();
        component.unmount();
    });
});

describe('Box', () => {
    // Check that the box was correctly created
    it('should create a box single row', () => {
        const boxObject = {
            "receiverName": "Max",
            "weight": "50",
            "color": "(255,255,100)",
            "destination": "Sweden",
            "shippingCost": "65"
        };

        const box = shallow(<Box box = {boxObject} />);
        expect(box).toMatchSnapshot();
    });

    // The tests bellow checks that each of the 'td' has
    // the value the rendered view is expected to have
    // Note: If each method does not have its own instance
    //       of 'boxObject' it will replace some values in
    //       the object and not work in the later tests

    // Test matching receiver name
    it('receiver name should match Max', () => {
        const boxObject = {
            "receiverName": "Max",
            "weight": "50",
            "color": "(255,255,100)",
            "destination": "Sweden",
            "shippingCost": "65"
        };

        const box = shallow(<Box box = {boxObject} />);
        const viewNodeValue = box.find('tr').childAt(0).text();

        expect(viewNodeValue).toEqual("Max");
    });

    // Test matching weight
    it('weight should match "50 kg"', () => {
        const boxObject = {
            "receiverName": "Max",
            "weight": "50",
            "color": "(255,255,100)",
            "destination": "Sweden",
            "shippingCost": "65"
        };

        const box = shallow(<Box box = {boxObject} />);
        const viewNodeValue = box.find('tr').childAt(1).text();

        expect(viewNodeValue).toEqual("50 kg");
    });

    // Test matching color
    it('color should match input field', () => {
        const boxObject = {
            "receiverName": "Max",
            "weight": "50",
            "color": "(255,255,100)",
            "destination": "Sweden",
            "shippingCost": "65"
        };

        const box = shallow(<Box box = {boxObject} />);
        const inputNode = box.find('tr').childAt(2).childAt(0).html();
        
        expect(inputNode).toEqual('<input type="color" value="#ffff64" disabled=""/>');
    });

    // Test matching destination name
    it('destination should match input Sweden', () => {
        const boxObject = {
            "receiverName": "Max",
            "weight": "50",
            "color": "(255,255,100)",
            "destination": "Sweden",
            "shippingCost": "65"
        };

        const box = shallow(<Box box = {boxObject} />);
        const viewNodeValue = box.find('tr').childAt(3).text();

        expect(viewNodeValue).toEqual("Sweden");
    });

    // Test matching shipping cost
    it('shippingCost should match input "65 SEK"', () => {
        const boxObject = {
            "receiverName": "Max",
            "weight": "50",
            "color": "(255,255,100)",
            "destination": "Sweden",
            "shippingCost": "65"
        };

        const box = shallow(<Box box = {boxObject} />);
        const viewNodeValue = box.find('tr').childAt(4).text();

        expect(viewNodeValue).toEqual("65 SEK");
    });
});