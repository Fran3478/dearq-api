import { Router } from "express"

const route = Router()

export default (app) => {
    app.use("/user", route)
    route.get("/test", (req, res) => {res.send("hello world")})
}