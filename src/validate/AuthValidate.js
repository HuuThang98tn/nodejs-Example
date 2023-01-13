const NAME_INVALID = 'Tên không hợp lệ';
const EMAIL_INVALID = 'Tài khoản không hợp lệ';
const EMAIL_EXISTS_INVALID = 'Tài khoản đã tồn tại';
const PASSWORD_INVALID = 'Mật khẩu không hợp lệ, từ 8 đến 30 kí tự';
const DATE_INVALID = 'Ngày sinh không hợp lệ';
const GENDER_INVALID = 'Giới tính không hợp lệ';
const NUMBER_PHONEEROR = "Số điện thoại không hợp lệ"
const NAME_REGEX = /\w{1,30}/;

const FIRST_INVALID = "Không bỏ trống họ";
const LAST_INVALID = "Không bỏ trống tên";
const FULL_INVALID = "Không bỏ trống họ tên";
const NGAYSINH = "Không bỏ trống ngày sinh";


const MyError = require("../exception/MyError");
const authModels = require("../models/AuthModel");
const commonUtils = require("../utils/commonUtils");
const authValidate = {

    checkNull: (value) => {
        if (!value) {
            return false;
        }
        return true;
    },
    validateEmail: (email) => {
        if (!email) {
            return false;
        }
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    },
    validatePhone: (phone) => {
        if (!phone) {
            return false;
        }
        const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

        return regex.test(phone);
    },

    validatePassword: (userPasswordLogin) => {
        if (!userPasswordLogin) {
            return false;
        }
        if (userPasswordLogin.length < 8 || userPasswordLogin.length > 30) {
            return false;
        }

        return true;
    },
    validateUserInfo: (userInfo) => {
        if (!userInfo || !this.validateEmail(userInfo) && !this.validatePhone(userInfo)) {
            return false;
        }
        return true;
    },
    checkRegistryInfo: async function (userInfo) {
        const { firstName, lastName, fullName, yearOfBirth, numberPhone, email, userPasswordLogin } = userInfo;
        const error = {};

        if (!this.checkNull(firstName)) {
            error.firstName = FIRST_INVALID;
        }
        if (!this.checkNull(lastName)) {
            error.lastName = LAST_INVALID;
        }
        if (!this.checkNull(fullName)) {
            error.fullName = FULL_INVALID;
        }
        if (!this.checkNull(yearOfBirth)) {
            error.yearOfBirth = NGAYSINH;
        }
        if (!this.validateEmail(email)) {
            error.email = EMAIL_INVALID;
        } else if (await authModels.findOne({ email })) {
            error.username = EMAIL_EXISTS_INVALID;
        }
        if (!this.validatePassword(userPasswordLogin)) {
            error.userPasswordLogin = PASSWORD_INVALID;
        }
        if (!this.validatePhone(numberPhone)) {
            error.numberPhone = NUMBER_PHONEEROR
        }
        if (!commonUtils.isEmpty(error)) {
            throw new MyError(error)
        }

        return {
            firstName,
            lastName,
            fullName,
            yearOfBirth,
            numberPhone,
            email,
            userPasswordLogin,
            email,
            userPasswordLogin
        }
    }
}

module.exports = authValidate