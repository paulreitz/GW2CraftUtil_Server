import BaseController from './BaseController';
import { getRecipe } from '../database/recipeData';

class RecipeController extends BaseController {
    constructor(router) {
        super(router, 'recipes');
        this.router.route(this.endPointPath(':itemId')).get(this.getRecipeData);
    }

    getRecipeData(req, res) {
        // for now deal with not finding a recipe
        console.log(req.params);
        res.status(200).send({
            status: 0,
            recipe: {}
        })
    }
}

export default RecipeController;

