import nodemailer from "nodemailer"
import config from "./index.js"
const {email} = config

const transporter = nodemailer.createTransport({
    service: email.service,
    auth: {
        user: email.auth.user,
        pass: email.auth.pass
    }
})

export default transporter