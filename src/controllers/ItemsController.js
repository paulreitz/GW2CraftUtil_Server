import BaseController from './BaseController';
import { getCoverItems, getSearchResults } from '../database/ItemsData';

class ItemsControllers extends BaseController {
    constructor(router) {
        super(router, 'items');
        this.router.route(this.endPointPath('cover')).get(this.getMainPageItems);
        this.router.route(this.endPointPath('search')).get(this.search);
    }

    getMainPageItems(__req, res) {
        getCoverItems()
        .then((set) => {
            res.status(200).send({results: set});
        })
        .catch((error) => {
            res.status(500).send({error});
        });
    }

    search(req, res) {
        getSearchResults(req.query)
        .then((set) => {
            res.status(200).send({results: set});
        })
        .catch((error) => {
            res.status(500).send({error});
        })
    }
}

export default ItemsControllers;