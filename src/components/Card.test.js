import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

it('renders without crashing', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
});