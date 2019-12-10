class BaseController {
    constructor(router, path) {
        this.router = router;
        this.path = path;
    }

    endPointPath(endpoint) {
        return `/${this.path}/${endpoint}`
    }
}

export default BaseController;