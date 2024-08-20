import { Router } from "express"
import { validateSignupUser, validateSigninUser, validateVerification, validateForgetPassword, validateResetPassword, validateResendEmail} from "../../validators/validateUser.js"
import {signin, signup} from "../../controllers/auth/index.js"
import { verifyEmail, forgotPassword, resetPassword, resendEmail } from "../../controllers/user/index.js"

const route = Router()

export default (app) => {
    app.use("/auth", route)
    route.post("/signin", validateSigninUser, signin)
    route.post("/signup", validateSignupUser, signup)
    route.post("/verify-email/:token", validateVerification, verifyEmail)
    route.post("/forgot-password", validateForgetPassword, forgotPassword)
    route.post("/reset-password", validateResetPassword, resetPassword)
    route.post("/resend-email/:email", validateResendEmail, resendEmail)
}