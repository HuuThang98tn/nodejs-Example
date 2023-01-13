const cors = require('cors');

const whileList = ['http://localhost:3000'];

const corsOptions = {
    origin: function (origin, callback) {
        if (whileList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);

        }
    },
    methods: [
        'GET',
        'HEAD',
        'OPTIONS',
        'PATCH',
        'PUT',
        'DELETE',
        'UPDATE',
        'POST'],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'device-remember-token',
        'Access-Control-Allow-Origin',
        'Origin',
        'Accept',
    ]
}

module.exports = cors(corsOptions)