import {email, recovery} from "./email.js"
import {passwordSignup, passwordSignin} from "./password.js"
import {usernameSignup, usernameSignin} from "./username.js"
import {token} from "./token.js"

const validateSignupUser = [
    usernameSignup,
    email,
    passwordSignup
]

const validateSigninUser = [
    usernameSignin,
    passwordSignin
]

const validateForgetPassword = [
    recovery
]

const validateResetPassword = [
    token,
    passwordSignup
]

export {
    validateSignupUser,
    validateSigninUser,
    validateForgetPassword,
    validateResetPassword
}