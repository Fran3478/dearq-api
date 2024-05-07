import {getType, getUser} from "../user/index.js"
import { NotFoundError, LoginError, EmailVerificationError } from "../../errors/index.js"

export default async ({username, password}) => {
    console.log(username, password)
    const type = getType(username)
    const user = await getUser({username, type})
    if(!user) throw new NotFoundError("user not found")
    if(!user.checkPass(password)) throw new LoginError("password don't match")
    if(!user.verified) throw new EmailVerificationError("user not verified")
    return user
}