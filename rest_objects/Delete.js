const { Request } = require("./Request");

class Delete extends Request {

    constructor() {
        super();
        this._method = "DELETE";
    }

    async deleteUser(id, data = {}) {
        let requestUrl = this.getBaseUrl() + "/users/" + id;

        return await this.request(requestUrl, this._method, data);
    }

}

module.exports = new Delete();