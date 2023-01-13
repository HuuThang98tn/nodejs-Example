const mongoose = require("mongoose")

async function connect() {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb://127.0.0.1:27017/examples", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conected successfully");

    } catch (error) {
        console.log("Conected failed", error);
    }
}

module.exports = { connect }