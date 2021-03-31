class DataGenerator {

    constructor() {

    }

    generateRandomUsers(dataSize = 1, addEmptyRegister = true) {
        let now = (new Date()).valueOf();

        let data = [];

        for (let i = 0; i < dataSize; i++) {
            let dataPiece = {
                email: (now + i) + "@email.com",
                password: "123"
            }

            data.push(dataPiece);
        }

        if (addEmptyRegister) {
            data.push({
                email: "",
                password: ""
            });
        }

        return data;
    }

}

module.exports = new DataGenerator();