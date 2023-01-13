const mAuthLogin = require("./AuthRoutes")


function routes(app) {
    app.use("/api-v1/auth", mAuthLogin)
}

module.exports = routes 