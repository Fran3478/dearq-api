import { User } from "../../models/index.js"

export default async ({email, username, password, token}) => {
    return await User.create({email, username, password, token})
}