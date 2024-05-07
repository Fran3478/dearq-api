import { Router } from "express"
import {validateSingupUser, validateSinginUser} from "../middlewares/validateUser.js"
import {singin, singup} from "../../controllers/auth/index.js"

const route = Router()

export default (app) => {
    app.use("/auth", route)
    route.post("/singin", validateSinginUser, singin)
    route.post("/singup", validateSingupUser, singup)
}