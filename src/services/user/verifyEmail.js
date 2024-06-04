import { sequelize } from "../../models/index.js"
import {getUser} from "./index.js"

export default async (token) => {
    const transaction = await sequelize.transaction()
    try {
        const user = await getUser({username: token, type: "token"})
        user.verified = true
        user.token = null
        await user.save()
        await transaction.commit()
        return
    } catch (err) {
        await transaction.rollback()
        throw new Error(err)
    }
}