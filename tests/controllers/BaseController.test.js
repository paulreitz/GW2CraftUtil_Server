import BaseController from '../../src/controllers/BaseController';

it('should create a controller with the correct path and a defined router', () => {
    const fakeRouter = {
        fake: 'router'
    }
    const controller = new BaseController(fakeRouter, 'path');
    expect(controller.path).toBe('path');
    expect(controller.router).toEqual(fakeRouter);
});

it('should return the correct path for a given end point', () => {
    const controller = new BaseController({}, 'path');
    const path = controller.endPointPath('to');
    expect(path).toBe('/path/to');
});