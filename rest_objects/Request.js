const { default: axios } = require("axios");

class Request {

    constructor() {
        this._baseUrl = "https://reqres.in/api";
    }

    getBaseUrl() { return this._baseUrl; }

    async request(url, method, params = {}) {
        let makeRequest;

        /*
        let formData = new FormData();

        if (params != {}) {
            for (let key in params) {
                let tag = "" + key;
                formData.append(tag, params[key]);
            }
        }
        else {
            formData = params;
        }
        
        console.log(formData);
        */

        method = method.toLowerCase();

        switch (method) {
            case "get":
                makeRequest = axios.get(url, params);
                break;

            case "post":
                makeRequest = axios.post(url, params);
                break;

            case "delete":
                makeRequest = axios.delete(url);
                break;
        }

        return await makeRequest
            .then((response) => {
                /*
                console.log("[ACCEPTED - status code]:" + response.status);
                console.log("[ACCEPTED - url]:" + response.config.url);
                console.log("[ACCEPTED - full response]:");
                console.log(response);
                */
                return {
                    status: response.status,
                    payload: response.data,
                    fullResponse: response
                }
            })
            .catch((error) => {
                if (error.response) {
                    /*
                    console.log("[ERROR - status code]:" + error.response.status);
                    console.log("[ERROR - url]:" + error.response.config.url);
                    console.log("[ERROR - full response]:");
                    console.log(error.response);
                    */
                    return {
                        status: error.response.status,
                        payload: error.response.data,
                        fullResponse: error.response
                    };
                }
                else if (error.request) {
                    //console.log("[ERROR - request]:" + error.request);
                    return {
                        error: error.request
                    };
                }
                else {
                    //console.log("[ERROR - message]:" + error.message);
                    return {
                        error: error.message
                    };
                }
            });
    }

}

module.exports.Request = Request;