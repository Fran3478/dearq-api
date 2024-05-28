import jwt from "jsonwebtoken"
import config from "../config/index.js"

const {_jwt} = config

export default (req, res, next) => {
    try {
        const authorization = req.get("authorization")
        let token = null
        if(authorization && authorization.toLowerCase().startsWith(("bearer"))) {
            token = authorization.split(" ")[1]
            const decoded = jwt.verify(token, _jwt.secret)
            req._isAdmin = decoded._role === "admin"
        } else {
            req._isAdmin = false
        }
        next()
    } catch (err) {
        if(err instanceof JsonWebTokenError){
            req._isAdmin = false
            next()
        }
        next(err)
    }
}