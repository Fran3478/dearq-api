import { Router } from "express"
import {validateSignupUser, validateSigninUser} from "../validators/validateUser.js"
import {signin, signup} from "../controllers/auth/index.js"

const route = Router()

export default (app) => {
    app.use("/auth", route)
    route.post("/signin", validateSigninUser, signin)
    route.post("/signup", validateSignupUser, signup)
}