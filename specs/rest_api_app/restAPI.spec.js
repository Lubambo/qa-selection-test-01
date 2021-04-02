const Get = require("../../rest_objects/Get");
const Post = require("../../rest_objects/Post");
const expectedResponsesGet = require("../../test_data/immutableResponseGet.json");
const expectedResponsesPost = require("../../test_data/immutableResponsePost.json");

describe("[GET Test Cases]", () => {

    it("Requisitar usuário existente", async (done) => {
        let expected = expectedResponsesGet.singleUser;

        let response = await Get.getUser(1);

        expect(response.status).toBe(200);
        expect(response.payload).toEqual(expected);
        done();
    });

    it("Requisitar usuário inexistente", async (done) => {
        let expected = {};

        let response = await Get.getUser(23);

        expect(response.status).toBe(404);
        expect(response.payload).toEqual(expected);
        done();
    });

    it("Listar usuários", async (done) => {
        let expected = expectedResponsesGet.usersList;

        let response = await Get.listUsers(2);

        expect(response.status).toBe(200);
        expect(response.payload).toEqual(expected);
        done();
    });

});