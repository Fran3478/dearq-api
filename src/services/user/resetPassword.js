import { sequelize } from "../../models/index.js"
import {getUser} from "./index.js"
import bcrypt from "bcrypt"

export default async ({password, token}) => {
    const transaction = await sequelize.transaction()
    try {
        const user = await getUser({username: token, type: "token"})
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        user.token = null
        await user.save({transaction})
        await transaction.commit()
        return
    } catch (err) {
        await transaction.rollback()
        throw new Error(err)
    }
}