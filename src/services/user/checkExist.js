import { find } from "../../repositories/user/index.js"

export default async ({value: username, att: type}) => {
    const user = await find({username, type})
    return user !== null
}