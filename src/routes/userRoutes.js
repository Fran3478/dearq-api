import { Router } from "express"
import { validateVerification, validateForgetPassword, validateResetPassword } from "../validators/validateUser.js"
import { verifyEmail, forgotPassword, resetPassword } from "../controllers/user/index.js"

const route = Router()

export default (app) => {
    app.use("/user", route)
    route.post("/verify-email/:token", validateVerification, verifyEmail)
    route.post("/forgot-password", validateForgetPassword, forgotPassword)
    route.post("/reset-password", validateResetPassword, resetPassword)
}