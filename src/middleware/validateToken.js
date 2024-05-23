import jwt from "jsonwebtoken"
import config from "../config/index.js"

const {_jwt} = config

export default (req, res, next) => {
    try {
        const authorization = req.get("authorization")
        let token = null
        if(authorization && authorization.toLowerCase().startsWith(("bearer"))) {
            token = authorization.split(" ")[1]
        }
        jwt.verify(token, _jwt.secret)
        next()
    } catch (error) {
        next(error)
    }
}