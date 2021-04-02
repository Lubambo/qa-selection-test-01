const { Request } = require("./Request");

class Get extends Request {

    constructor() {
        super();
    }

    async getUser(id = 1) {
        let requestUrl = this.getBaseUrl() + "/users/" + id;

        return await this.request(requestUrl, "GET");
    }

    async listUsers(pageNumber = 1) {
        let requestUrl = this.getBaseUrl() + "/users";
        let params = { page: pageNumber };

        return await this.request(requestUrl, "GET", params);
    }

}

module.exports = new Get();