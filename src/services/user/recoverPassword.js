import sendRecoveryEmail from "../email/sendRecoveryEmail.js"
import { generateToken } from "../token/index.js"
import {getUser} from "./index.js"

export default async (email) => {
    try {
        const user = await getUser({username: email, type: "email"})
        const token = generateToken()
        user.token = token
        await user.save()
        await sendRecoveryEmail({email, username: user.username, token})
        return
    } catch (err) {
        throw new Error(err)
    }
}