import {getType} from "../user/index.js"
import { LoginError, EmailVerificationError } from "../../errors/index.js"
import generateJWT from "../token/generateJWT.js"
import {find} from "../../repositories/user/index.js"

export default async ({username, password}) => {
    const type = getType(username)
    const user = await find({username, type})
    if(!user || !user?.checkPass(password)) throw new LoginError("Usuario o contraseña incorrectos")
    if(!user.verified) throw new EmailVerificationError("El correo no ha sido validado aún")
    const token = generateJWT({_id: user.id, _username: user.username, _role: user.role})
    return {user: user.username, token}
}