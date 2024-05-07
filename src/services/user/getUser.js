import User from "../../models/User.js"

export default async ({username, type: att}) => {
    try {
        const user = await User.findOne({where: {[att]: username}})
        return user
    } catch (error) {
        throw new Error(error)
    }
}