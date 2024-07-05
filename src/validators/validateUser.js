import {emailCreate, emailRecovery, emailResend} from "./email.js"
import {passwordSignup, passwordSignin} from "./password.js"
import {usernameSignup, usernameSignin} from "./username.js"
import {tokenBody, tokenParam} from "./token.js"

const validateSignupUser = [
    usernameSignup,
    emailCreate(),
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
    emailRecovery()
]

const validateResetPassword = [
    tokenBody,
    passwordSignup
]

const validateResendEmail = [
    emailResend()
]

export {
    validateSignupUser,
    validateSigninUser,
    validateVerification,
    validateForgetPassword,
    validateResetPassword,
    validateResendEmail
}