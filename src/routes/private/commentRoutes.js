import { Router } from "express";

const route = Router()

export default (app) => {
    app.use("/comments", route)
    route.post("/new/:postId")
    route.post("/new/:postId/:commentId")
    route.post("/like/:commentId")
    route.put("/edit/:commentId")
    route.delete("/delete/:commentId")
    route.post("/block/:commentId")
}