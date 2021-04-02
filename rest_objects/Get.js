const { Request } = require("./Request");

class Get extends Request {

    constructor() {
        super();
        this._method = "GET";
    }

    async getUser(id = 1) {
        let requestUrl = this.getBaseUrl() + "/users/" + id;

        return await this.request(requestUrl, this._method);
    }

    async listUsers(pageNumber = 1) {
        let requestUrl = this.getBaseUrl() + "/users";

        let params = {
            params: {
                page: pageNumber
            }
        };

        return await this.request(requestUrl, this._method, params);
    }

}

module.exports = new Get();