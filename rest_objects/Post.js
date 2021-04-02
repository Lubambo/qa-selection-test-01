const { Request } = require("./Request");

class Post extends Request {

    constructor() {
        super();
        this._method = "POST";
    }

    async createUser(user = {}) {
        let requestUrl = this.getBaseUrl() + "/users";

        return await this.request(requestUrl, this._method, user);
    }

}

module.exports = new Post();