const Delete = require("../../rest_objects/Delete");
const Get = require("../../rest_objects/Get");
const Patch = require("../../rest_objects/Patch");
const Post = require("../../rest_objects/Post");
const Put = require("../../rest_objects/Put");
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

describe("[POST Test Cases]", () => {

    it("Criar usuário", async (done) => {
        let newUser = expectedResponsesPost.newUser;
        let expected = newUser.name;

        let response = await Post.createUser(newUser);

        expect(response.status).toBe(201);
        expect(response.payload.name).toBe(expected);
        done();
    });

    it("Tentar criar usuário sem informações", async (done) => {
        let emptyUser = {};

        let response = await Post.createUser(emptyUser);

        expect(response.status).toBe(400);
        done();
    });

});

describe("[PUT Test Cases]", () => {

    it("Atualizar usuário", async (done) => {
        let newUserInfo = {
            name: "Neo",
            job: "Chosen One"
        };

        let response = await Put.updateUser(2, newUserInfo);

        let updatedUser = response.payload;
        let deleteUpdatedDate = delete updatedUser.updatedAt;

        expect(response.status).toBe(200);
        expect(updatedUser).toEqual(newUserInfo);
        expect(deleteUpdatedDate).toBe(true);
        done();
    });

    it("Atualizar usuário inexistente", async (done) => {
        let newUserInfo = {
            name: "Oracle",
            job: "Walker"
        };

        let response = await Put.updateUser("noUserHere", newUserInfo);

        expect(response.status).toBe(404);
        done();
    });

});

describe("[PATCH Test Cases]", () => {

    it("Atualizar parcialmente usuário", async (done) => {
        let newUserInfo = {
            name: "Thrinity"
        };

        let response = await Patch.updateUser(2, newUserInfo);

        let updatedUser = response.payload;
        let deleteUpdatedDate = delete updatedUser.updatedAt;

        expect(response.status).toBe(200);
        expect(updatedUser).toEqual(newUserInfo);
        expect(deleteUpdatedDate).toBe(true);
        done();
    });

    it("Atualizar parcialmente usuário inexistente", async (done) => {
        let newUserInfo = {
            job: "Fighter"
        };

        let response = await Patch.updateUser("noUserHere", newUserInfo);

        expect(response.status).toBe(404);
        done();
    });

});

describe("[DELETE Test Cases]", () => {

    it("Remover usuário existente", async (done) => {
        let response = await Delete.deleteUser(2);

        expect(response.status).toBe(204);
        done();
    });

    it("Remover usuário inexistente", async (done) => {
        let response = await Delete.deleteUser("noUserHere");

        expect(response.status).toBe(404);
        done();
    });

});