const { Request } = require("./Request");

class Put extends Request {

    constructor() {
        super();
        this._method = "PUT";
    }

    async updateUser(id, data = {}) {
        let requestUrl = this.getBaseUrl() + "/users/" + id;

        return await this.request(requestUrl, this._method, data);
    }

}

module.exports = new Put();