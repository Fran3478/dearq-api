import { Router } from "express"
import { validateForgetPassword } from "../validators/validateUser.js"
import forgotPassword from "../controllers/user/forgotPassword.js"

const route = Router()

export default (app) => {
    app.use("/user", route)
    route.post("/forgot-password", validateForgetPassword, forgotPassword)
    route.post("/reset-password",)
}