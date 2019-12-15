import MetadataController from '../../src/controllers/MetadataController';
import { getTypes, getRarities } from '../../src/database/MetaData';
import { mockRouter, mockRouterWithPathArray } from '../__mocks__/router.mock';
import { mockTypes, mockRarities } from '../fixtures/mockMetadata';
jest.mock('../../src/database/MetaData');

it('should set up the paths to the endpoints', () => {
    const endpoints = [];
    const __controller = new MetadataController(mockRouterWithPathArray(endpoints));
    expect(endpoints).toContain('/meta/types');
    expect(endpoints).toContain('/meta/rarities');
});

it('should set status to 200 and return the types', (done) => {
    getTypes.mockImplementation(() => {
        return Promise.resolve(mockTypes);
    });
    const res = {
        status: jest.fn((status) => {
            return {
                send: jest.fn((set) => {
                    expect(status).toBe(200);
                    expect(set).toEqual({types: mockTypes});
                    done();
                })
            };
        })
    };
    const controller = new MetadataController(mockRouter());
    controller.getTypes({}, res);
});

it('should set the status to 500 and send an error if getTypes fails', (done) => {
    const error = {error: 'not gonna happen'};
    getTypes.mockImplementation(() => {
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
    const controller = new MetadataController(mockRouter());
    controller.getTypes({}, res);
});

it('should set the status to 200 and return and array of rarities', (done) => {
    getRarities.mockImplementation(() => {
        return Promise.resolve(mockRarities);
    });
    const res = {
        status: jest.fn((status) => {
            return {
                send: jest.fn((set) => {
                    expect(status).toBe(200);
                    expect(set).toEqual({rarities: mockRarities});
                    done();
                })
            };
        })
    };
    const controller = new MetadataController(mockRouter());
    controller.getRarities({}, res);
});

it('should set the status to 500 and return an error if there was a problem getting rarities', (done) => {
    const error = {error: 'not today'};
    getRarities.mockImplementation(() => {
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
    const controller = new MetadataController(mockRouter());
    controller.getRarities({}, res);
})