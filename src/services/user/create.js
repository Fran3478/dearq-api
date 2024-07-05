import User from "../../models/User.js"
import { generateToken } from "../token/index.js"

export default async ({username, password, email}) => {
    try {
        const token = generateToken()
        const user = await User.create({email, username, password, token})
        return user
    } catch (error) {
        throw new Error(error)
    }
}