import { EmailVerificationError } from "../../errors/index.js"
import { sendVerificationEmail } from "../email/index.js"
import { generateToken } from "../token/index.js"
import { find } from "../../repositories/user/index.js"

export default async (email) => {
    try {
        const user = await find({username: email, type: "email"})
        const token = generateToken()
        user.token = token
        await user.save()
        await sendVerificationEmail({username: user.username, email, token})
        return
    } catch (err) {
        throw new EmailVerificationError("No se pudo enviar el correo")
    }
}