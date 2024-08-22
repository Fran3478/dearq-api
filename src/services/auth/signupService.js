import { generateToken } from "../token/index.js"
import {create} from "../../repositories/user/index.js"
import {sendVerificationEmail} from "../email/index.js"
import { getUsername } from "../user/index.js"
import { SignupError } from "../../errors/index.js"

export default async (body) => {
    try {
        const {email, password} = body
        const username = body.username ? body.username : await getUsername(email)
        const token = generateToken()
        const user = await create({email, username, password, token})
        sendVerificationEmail({email: user.email, username: user.username, token: user.token})
        return(user)
    } catch (err) {
        throw new SignupError("Error al crear usuario", err)
    }
}