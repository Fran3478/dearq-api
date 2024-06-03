import { Router } from "express"
import validateToken from "../middleware/validateToken.js"

const route = Router()

export default (app) => {
    app.use("/user", route)
    route.post("/recover-password", validateToken, )
}