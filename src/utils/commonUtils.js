const bcrypt = require('bcrypt');

const commonUtils = {
    isEmpty: (obj) => {
        if (!obj) return true;
        return Object.keys(obj).length === 0;
    },

    passwordEncryption: async (value) => {
        if (!value) {
            return null;
        }
        const encryption = await bcrypt.hash(value, 10);

        return encryption

    }
    // getRandomInt: (min, max) => {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // },
    // getRandomOTP: function () {
    //     return this.getRandomInt(100000, 999999);
    // },
    // hashPassword: async (value) => {
    //     if (!value) return null;

    //     return await bcrypt.hash(value, 8);
    // },

    // getPagination: (page, size, total) => {
    //     const totalPages = Math.ceil(total / size);
    //     const skip = page * size;
    //     return {
    //         skip,
    //         limit: size,
    //         totalPages,
    //     };
    // },
    // getRandomInt: (min, max) => {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // },
};

module.exports = commonUtils;
