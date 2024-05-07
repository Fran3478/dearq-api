import {getType, getUser} from "../user/index.js"
import { NotFoundError, LoginError, EmailVerificationError } from "../../errors/index.js"

export default async ({username, password}) => {
    console.log(username, password)
    const type = getType(username)
    const user = await getUser({username, type})
    if(!user) throw new NotFoundError("El usuario no existe")
    if(!user.checkPass(password)) throw new LoginError("Contraseña incorrecta")
    if(!user.verified) throw new EmailVerificationError("No se valido el correo")
    return user
}