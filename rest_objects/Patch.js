const { Request } = require("./Request");

class Patch extends Request {

    constructor() {
        super();
        this._method = "PATCH";
    }

    async updateUser(id, data = {}) {
        let requestUrl = this.getBaseUrl() + "/users/" + id;

        return await this.request(requestUrl, this._method, data);
    }

}

module.exports = new Patch();