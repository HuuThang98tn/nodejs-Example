const mAuthService = require("../service/AuthService")
class AuthController {

    mAuthLogin(req, res, next) {

    }
    async mAuthRegister(req, res, next) {
        try {
            const register = await mAuthService.mRegisterService(req.body)
            res.json({
                code: 200,
                message: "Register successfully",
                register
            })

        } catch (error) {
            res.json({
                code: 400,
                message: "Register failed",
                errorDetails: error
            })
        }

    }

}

module.exports = new AuthController();
