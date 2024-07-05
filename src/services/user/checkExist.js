import {User} from "../../models/index.js"

export default async ({value, att}) => {
    const user = await User.scope("removeSensitive").findOne({ where: { [att]: value }})
    return user !== null
}