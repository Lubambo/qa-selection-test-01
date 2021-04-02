const { Request } = require("./Request");

class Post extends Request {

    constructor() {
        super();
    }

    async createUser(user = {}) {
        let requestUrl = this.getBaseUrl() + "/users";

        return await this.request(requestUrl, "POST", user);
    }

}

module.exports = new Post();