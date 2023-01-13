
const userValidate = require("../validate/AuthValidate")
const authModels = require("../models/AuthModel")
const commonUtils = require("../utils/commonUtils")
class AuthService {
    async mLoginService() {

    }

    async mRegisterService(userInfo) {
        const registryInfo = await userValidate.checkRegistryInfo(userInfo);
        const passwordEncryption = await commonUtils.passwordEncryption(userInfo.userPasswordLogin)
        const newUser = new authModels({
            ...registryInfo,
            userPasswordLogin: passwordEncryption


        })

        console.log(newUser);


        return await newUser
    }


}
module.exports = new AuthService();