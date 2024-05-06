import userService from "../user/index.js"
import sendEmail from "../email/sendEmail.js"

export default async (body) => {
    try {
        const {username, email, password} = body
        const user = await userService.create({username, email, password})
        console.log(user)
        console.log(user.token)
        await sendEmail({email: user.email, username: user.username, token: user.token})
    } catch (error) {
        
    }
}