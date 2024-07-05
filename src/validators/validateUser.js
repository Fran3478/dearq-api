import {email, recovery} from "./email.js"
import {passwordSignup, passwordSignin} from "./password.js"
import {usernameSignup, usernameSignin} from "./username.js"
import {tokenBody, tokenParam} from "./token.js"

const validateSignupUser = [
    usernameSignup,
    email,
    passwordSignup
]

const validateSigninUser = [
    usernameSignin,
    passwordSignin
]

const validateVerification = [
    tokenParam
]

const validateForgetPassword = [
    recovery
]

const validateResetPassword = [
    tokenBody,
    passwordSignup
]

export {
    validateSignupUser,
    validateSigninUser,
    validateVerification,
    validateForgetPassword,
    validateResetPassword
}