import BaseContoller from './BaseController';
import { getTypes, getRarities } from '../database/MetaData';

class MetadataController extends BaseContoller {
    constructor(router) {
        super(router, 'meta');
        this.router.route(this.endPointPath('types')).get(this.getTypes);
        this.router.route(this.endPointPath('rarities')).get(this.getRarities);
    }

    getTypes(_req, res) {
        getTypes()
        .then((set) => {
            res.status(200).send({'types': set});
        })
        .catch((error) => {
            res.status(500).send({error: error});
        })
        
    }

    getRarities(__req, res) {
        getRarities()
        .then((set) => {
            res.status(200).send({'rarities': set});
        })
        .catch((error) => {
            res.status(500).send({error: error});
        })
    }
}

export default MetadataController;