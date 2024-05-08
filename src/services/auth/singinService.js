import {getType, getUser} from "../user/index.js"
import { LoginError, EmailVerificationError } from "../../errors/index.js"

export default async ({username, password}) => {
    console.log(username, password)
    const type = getType(username)
    const user = await getUser({username, type})
    if(!user || !user?.checkPass(password)) throw new LoginError("Usuario o contraseña incorrectos")
    if(!user.verified) throw new EmailVerificationError("El correo no ha sido validado aún")
    return user
}