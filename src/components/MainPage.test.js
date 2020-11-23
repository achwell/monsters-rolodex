import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

const leaneGraham = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
};

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('fileters Robots', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: 'a',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('fileters Robots correctly', () => {
    const filteredRobots = [leaneGraham]
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [leaneGraham],
        searchField: 'Leanne',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
    expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});

it('fileters Robots correctly 2', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [leaneGraham],
        searchField: 'Xavier',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('handles isPending correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [leaneGraham],
        searchField: 'Xavier',
        isPending: true
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
    expect(wrapper.instance().filterRobots()).toEqual([]);
});