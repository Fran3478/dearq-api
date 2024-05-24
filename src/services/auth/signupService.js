import { create } from "../user/index.js"
import sendEmail from "../email/sendEmail.js"
import getUsername from "../user/getUsername.js"

export default async (body) => {
    try {
        const {email, password} = body
        const username = body.username ? body.username : await getUsername(email)
        const user = await create({username, email, password})
        sendEmail({email: user.email, username: user.username, token: user.token})
        return(user)
    } catch (error) {
        console.log(error)
    }
}