import * as reducers from './reducers'
import * as types from './constants'

describe('searchRobots reducer', () => {

    const initialStateSearch = {searchField: ''}

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(
            reducers.searchRobots(initialStateSearch, {
                type: types.CHANGE_SEARCHFIELD,
                payload: 'abc'
            })
        ).toEqual({searchField: "abc"});
    });
});
describe('requestRobots reducer', () => {

    const initialStateRobots = {robots: [], isPending: true};
    const robots = [{id: '123', name: 'test', email: 'j@jmail.com'}];

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(
            reducers.requestRobots(initialStateRobots, {
                type: types.REQUEST_ROBOTS_PENDING
            })
        ).toEqual({
            robots: [],
            isPending: true
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(
            reducers.requestRobots(initialStateRobots, {
                type: types.REQUEST_ROBOTS_SUCCESS,
                payload: robots
            })
        ).toEqual({
            robots: robots,
            isPending: false
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(
            reducers.requestRobots(initialStateRobots, {
                type: types.REQUEST_ROBOTS_FAILED,
                payload: 'FEIL!'
            })
        ).toEqual({
            error: "FEIL!",
            isPending: true,
            robots: []
        });
    });

});