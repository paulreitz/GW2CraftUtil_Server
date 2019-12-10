import Server from '../src/server/Server';
jest.mock('../src/server/Server');

it('should run the tests and stuff', () => {
    require('../src/app');
    expect(Server).toHaveBeenCalled();
});