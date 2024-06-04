import {email, recovery} from "./email.js"
import {passwordSignup, passwordSignin} from "./password.js"
import {usernameSignup, usernameSignin} from "./username.js"

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

]

export {
    validateSignupUser,
    validateSigninUser,
    validateForgetPassword,
    validateResetPassword
}