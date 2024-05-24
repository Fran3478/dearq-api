import email from "./email.js"
import {passwordSignup, passwordSignin} from "./password.js"
import {usernameSignup, usernameSignin} from "./username.js"

export const validateSignupUser = [
    usernameSignup,
    email,
    passwordSignup
]

export const validateSigninUser = [
    usernameSignin,
    passwordSignin
]