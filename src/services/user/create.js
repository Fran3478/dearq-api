import User from "../../models/User.js"
import tokenService from "../token/index.js"

export default async ({username, password, email}) => {
    try {
        const token = await tokenService.generateToken()
        const user = await User.create({email, username, password, token})
        return user
    } catch (error) {
        throw new Error(error)
    }
}