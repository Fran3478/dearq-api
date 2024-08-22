import { User } from "../../models/index.js"

export default async ({username: value, type: att}) => {
    return await User.scope("removeSensitive").findOne({where: {[att]: value}})
}