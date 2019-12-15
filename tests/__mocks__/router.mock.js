export const mockRouter = () => ({
    route: jest.fn((path) => {
        return {
            get: jest.fn(() => {}),
            post: jest.fn(() => {}),
            put: jest.fn(() => {}),
            delete: jest.fn(() => {})
        };
    })
});

export const mockRouterWithPathArray = (paths) => ({
    route: jest.fn((path) => {
        paths.push(path);
        return {
            get: jest.fn(() => {}),
            post: jest.fn(() => {}),
            put: jest.fn(() => {}),
            delete: jest.fn(() => {})
        };
    })
});