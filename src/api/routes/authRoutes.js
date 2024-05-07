import { Router } from "express"
import validateUser from "../middlewares/validateUser.js"
import singup from "../../controllers/auth/singup.js"

const route = Router()

export default (app) => {
    app.use("/auth", route)
    // route.post("/singin", )
    route.post("/singup", validateUser, singup)
}