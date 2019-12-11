import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import MetadataController from '../controllers/MetadataController';
import ItemsController from '../controllers/ItemsController';
import RecipeController from '../controllers/RecipeController';

class Server {
    app = undefined;
    router = undefined;

    constructor() {
        this.app = express();
        this.router = express.Router();
        this.router.get('/', (req, res) => {
            return res.status(200).send({'message': 'this works too'});
        });
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use('/', this.router);
        // The rest of the REST will go here
        const metadataController = new MetadataController(this.router);
        const itemsController = new ItemsController(this.router);
        const recipeController = new RecipeController(this.router);

        const port = process.env.PORT || 3002;
        this.app.listen(port);
        console.log(`Host listening on port ${port}`);
    }
}

export default Server;