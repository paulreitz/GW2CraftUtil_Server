import BaseController from './BaseController';
import { getRecipe } from '../database/recipeData';

class RecipeController extends BaseController {
    constructor(router) {
        super(router, 'recipes');
        this.router.route(this.endPointPath(':itemId')).get(this.getRecipeData);
    }

    getRecipeData(req, res) {
        // for now deal with not finding a recipe
        getRecipe(req.params.itemId).then((data) => {
            res.status(200).send(data);
        })
    }
}

export default RecipeController;

