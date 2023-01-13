const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const mAuthSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    fullName: {
        type: String,
    },
    avataUser: {
        type: String,
        default: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    yearOfBirth: {
        type: Date,
    },
    numberPhone: {
        type: String,
    },
    email: {
        type: String,
    },
    userPasswordLogin: {
        type: String,
    },
    userAuthentication: {
        type: Boolean,
        default: false,
    }

});

const mAuthModels = mongoose.model("authModels", mAuthSchema);

module.exports = mAuthModels;
