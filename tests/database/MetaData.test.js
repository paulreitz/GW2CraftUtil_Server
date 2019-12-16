import { getTypes, getRarities } from '../../src/database/MetaData';
import { mockTypeRecords, mockTypes, mockRarityRecords, mockRarities } from '../fixtures/mockMetadata';
import sql from 'mssql';
jest.mock('mssql');

const mockSqlConnection = () => {
    sql.connect.mockImplementation((__config, callback) => {
        callback();
    })
}

it('should get types', (done) => {
    mockSqlConnection();
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                return Promise.resolve({recordset: mockTypeRecords});
            })
        };
    });
    getTypes().then((types) => {
        expect(types).toEqual(mockTypes.types);
        done();
    });
});

it('should return an error if getTypes fails to connect to the database', (done) => {
    const error = {error: 'oopsie'};
    sql.connect.mockImplementation((__config, callback) => {
        callback(error);
    });
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                expect(false).toBe(true); // fail if we get to this point.
                done();
            })
        };
    });
    getTypes().catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});

it('should return an error if failing to get types from the database', (done) => {
    const error = {error: 'did I do that?'};
    mockSqlConnection();
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                return Promise.reject(error);
            })
        };
    });
    getTypes().catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});

it('should get rarities', (done) => {
    mockSqlConnection();
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                return Promise.resolve({recordset: mockRarityRecords});
            })
        };
    });
    getRarities().then((rarities) => {
        expect(rarities).toEqual(mockRarities.rarities);
        done();
    });
});

it('should return an error if getRarities fails to connect to the database', (done) => {
    const error = {error: 'there goes another one'};
    sql.connect.mockImplementation((__config, callback) => {
        callback(error);
    });
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                expect(false).toBe(true); // fail if we've gotten here
                done();
            })
        };
    });
    getRarities().catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});

it('should return an error if failing to get rarities from the database', (done) => {
    const error = {error: 'do you feel lucky, punk?'};
    mockSqlConnection();
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                return Promise.reject(error);
            })
        };
    });
    getRarities().catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});