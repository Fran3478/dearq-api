import email from "./email.js"
import {passwordSingup, passwordSingin} from "./password.js"
import {usernameSingup, usernameSingin} from "./username.js"

export const validateSingupUser = [
    usernameSingup,
    email,
    passwordSingup
]

export const validateSinginUser = [
    usernameSingin,
    passwordSingin
]