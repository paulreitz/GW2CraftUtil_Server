import RecipeController from '../../src/controllers/RecipeController';
import { getRecipe } from '../../src/database/recipeData';
import { mockRouter, mockRouterWithPathArray } from '../__mocks__/router.mock';
import { mockRecipe } from '../fixtures/mockRecipe';
jest.mock('../../src/database/recipeData');

it('should set up the path to the endpoint', () => {
    const endpoints = [];
    const __controller = new RecipeController(mockRouterWithPathArray(endpoints));
    expect(endpoints).toContain('/recipes/:itemId');
    expect(endpoints.length).toBe(1); // fail if a new endpoint is added tests aren't added
});

it('should set the status to 200 and return a recipe', (done) => {
    getRecipe.mockImplementation(() => {
        return Promise.resolve(mockRecipe);
    });
    const res = {
        status: jest.fn((status) => {
            return {
                send: jest.fn((set) => {
                    expect(status).toBe(200);
                    expect(set).toEqual(mockRecipe)
                    done();
                })
            };
        })
    };
    const controller = new RecipeController(mockRouter());
    controller.getRecipeData({params: {itemId: 13903}}, res);
})