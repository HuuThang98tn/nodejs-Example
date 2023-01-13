class MyError extends Error {
    constructor(message) {
        super();
        this.code = 400;
        this.error = "Error";
        this.message = message;
    }
}
module.exports = MyError;
