import jwt from "jsonwebtoken"
import config from "../../config/index.js"

const {_jwt} = config

export default (user) => {
    const token = jwt.sign(user, _jwt.secret)
    return token
}