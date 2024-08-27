import { find } from "../../repositories/user/index.js"

export default async (id) => {
    try {
        const user = await find({username: id, type: "id"})
        if(user.role !== "admin") return {admin: false, data: user}
        return {admin: true, data: user}
    } catch (err) {
        throw new Error(err)
    }
}