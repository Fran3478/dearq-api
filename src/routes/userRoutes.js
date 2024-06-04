import { Router } from "express"
import { validateForgetPassword, validateResetPassword } from "../validators/validateUser.js"
import {forgotPassword, resetPassword} from "../controllers/user/index.js"

const route = Router()

export default (app) => {
    app.use("/user", route)
    route.post("/forgot-password", validateForgetPassword, forgotPassword)
    route.post("/reset-password", validateResetPassword, resetPassword)
}