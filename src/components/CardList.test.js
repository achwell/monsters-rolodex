import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('renders without crashing', () => {
    const mockRobots = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
    }];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});