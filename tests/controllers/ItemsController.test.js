import ItemsController from '../../src/controllers/ItemsController';
import { getCoverItems, getSearchResults } from '../../src/database/ItemsData';
import { mockRouter, mockRouterWithPathArray } from '../__mocks__/router.mock';
import { mockItems } from '../fixtures/mockItems';
jest.mock('../../src/database/ItemsData');

beforeEach(() => {
    
})

it('should set up the paths to the end points', () => {
    const paths = [];
    const router = mockRouterWithPathArray(paths);
    const __controller = new ItemsController(router);
    expect(paths).toContain('/items/cover');
    expect(paths).toContain('/items/search');
});

it('should return 200 and get the item set when getting the cover items', (done) => {
    getCoverItems.mockImplementation(() => {
        return Promise.resolve(mockItems)
    })
    const res = {
        status: jest.fn((status) => {
            return {
                send: jest.fn((set) => {
                    expect(status).toBe(200);
                    expect(set).toEqual({results: mockItems})
                    done();
                })
            };
        })
    };
    const controller = new ItemsController(mockRouter());
    controller.getMainPageItems({}, res);
});

it('should send 500 and an error if there is a problem getting cover items from the database', (done) => {
    const error = {error: 'something went wrong'}
    getCoverItems.mockImplementation(() => {
        return Promise.reject(error);
    });
    const res = {
        status: jest.fn((status) => {
            return {
                send: jest.fn((err) => {
                    expect(status).toBe(500);
                    expect(err).toEqual({error: error});
                    done();
                })
            };
        })
    };
    const controller = new ItemsController(mockRouter());
    controller.getMainPageItems({}, res);
});

it('should send 200 and get items when the search endpoint is hit', (done) => {
    getSearchResults.mockImplementation(() => {
        return Promise.resolve(mockItems);
    });
    const res = {
        status: jest.fn((status) => {
            return {
                send: jest.fn((set) => {
                    expect(status).toBe(200);
                    expect(set).toEqual({results: mockItems});
                    done();
                })
            };
        })
    };
    const controller = new ItemsController(mockRouter());
    controller.search({}, res);
});

it('should send 500 and an error if the search failed', (done) => {
    const error = {error: 'nope!'};
    getSearchResults.mockImplementation(() => {
        return Promise.reject(error);
    });
    const res = {
        status: jest.fn((status) => {
            return {
                send: jest.fn((err) => {
                    expect(status).toBe(500);
                    expect(err).toEqual({error});
                    done();
                })
            };
        })
    };
    const controller = new ItemsController(mockRouter());
    controller.search({}, res);
})