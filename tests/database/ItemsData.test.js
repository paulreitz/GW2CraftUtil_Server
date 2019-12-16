import { getCoverItems, getSearchResults } from '../../src/database/ItemsData';
import sql from 'mssql';
import { mockItems } from '../fixtures/mockItems';
jest.mock('mssql');

const baseSearchQuery = 'SELECT TOP 100 * FROM Items';

const mockSqlConnection = () => {
    sql.connect.mockImplementation((__config, callback) => {
        callback();
    })
};

it('should return cover items from the database', (done) => {
    mockSqlConnection();
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getCoverItems().then((set) => {
        expect(set.length).toBe(2);
        done();
    })
});

it('should reject with an error if failing to connect to the database while getting cover items', (done) => {
    const error = {error: 'something is amiss'};
    sql.connect.mockImplementation((__config, callback) => {
        callback(error);
    });
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                expect(false).toBe(true); // fail if we reach this point
                done(); 
            })
        }
    })
    getCoverItems().catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});

it('should return an erro if failing to get cover items from database', (done) => {
    const error = { error: 'not gonna happen' };
    mockSqlConnection();
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                return Promise.reject(error);
            })
        };
    });
    getCoverItems().catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});

it('should run a very basic query if no data is provided', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {};
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 80`);
        done();
    });

});

it('should set the min level if provided', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        minLevel: 60
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 60 AND rating <= 80`);
        done();
    });
});

it('should set the max level if provided', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        maxLevel: 60
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 60`);
        done();
    });
});

it('should set minLevel to 0 if minLevel is lower than 0', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        minLevel: -1
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 80`);
        done();
    });
});

it('should set minLevel to 80 if minLevel is higher than 80', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        minLevel: 82,
        maxLevel: 80
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 80 AND rating <= 80`);
        done();
    });
});

it('should set minLevel to maxLevel if minLevel is greater than maxLevel', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        minLevel: 60,
        maxLevel: 40
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 40 AND rating <= 40`);
        done();
    });
});

it('should set maxLevel to 80 if maxLevel is greater than 80', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        maxLevel: 82
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 80`);
        done();
    });
});

it('should set maxLevel to 0 if maxLevel is less than 0', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        maxLevel: -1
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 0`);
        done();
    });
});

it('should query by types if types are included', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        types: ['foo', 'bar']
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE type in ('foo', 'bar') AND rating >= 0 AND rating <= 80`);
        done();
    });
});

it('should not query by types if types is included but is an empty array', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        types: []
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 80`);
        done();
    });
});

it('should query by rarities if rarities are included', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        rarities: ['foo', 'bar']
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rarity in ('foo', 'bar') AND rating >= 0 AND rating <= 80`);
        done();
    });
});

it('should not query by rarities if rarities is included but is an empty array', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        rarities: []
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 80`);
        done();
    });
});

it('should include search text if search text is included', (done) => {
    let query = '';
    mockSqlConnection();
    const mockData = {
        search: 'fooBar'
    };
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn((queryString) => {
                query = queryString;
                return Promise.resolve({recordset: mockItems.results});
            })
        };
    });
    getSearchResults(mockData).then((__set) => {
        expect(query).toBe(`${baseSearchQuery} WHERE rating >= 0 AND rating <= 80 AND name like '%fooBar%'`);
        done();
    });
});

it('should return an error if the search failed to connect to the database', (done) => {
    const error = {error: 'no such connection'};
    sql.connect.mockImplementation((__config, callback) => {
        callback(error);
    });
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                expect(false).toBe(true); // Fail if we reach this point
                done();
            })
        };
    });
    getSearchResults({}).catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});

it('should return an error if the search query failed', (done) => {
    const error = {error: 'nope'};
    mockSqlConnection();
    sql.Request.mockImplementation(() => {
        return {
            query: jest.fn(() => {
                return Promise.reject(error);
            })
        };
    });
    getSearchResults({}).catch((err) => {
        expect(err).toEqual(error);
        done();
    });
});