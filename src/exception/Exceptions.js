class Exceptions extends Error {
    constructor(message = 'Đã có lỗi xảy ra') {
        super();
        this.status = 401;
        this.message = message;
    }
}

module.exports = Exceptions;
