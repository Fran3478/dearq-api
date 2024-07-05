import { Router } from "express"

const route = Router()

export default (app) => {
    app.use("/test", route)
    route.get("/status", (req, res) => {res.status(200).json({status: {server: "ok"}})})
}