import User from "../../models/User.js"
import tokenService from "../token/index.js"

export default async ({username, password, email}) => {
    const token = await tokenService.generateToken()
    const user = await User.create({email, username, password, token})
    return user
}