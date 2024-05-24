import { create } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await create({body: req.body, userId: req._user})
        return res.status(200).json({msg: "Post creado con exito"})
    } catch (err) {
        next(err)
    }
}