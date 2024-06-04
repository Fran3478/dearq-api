import transporter from "../../config/emailer.js"
import htmlGen from "../../template/recoveryEmail.js"
import { EmailRecoveryError } from "../../errors/index.js"

export default async ({username, email, token}) => {
    try {
        const html = htmlGen({username, token})
        const mail = await transporter.sendMail({
            from: '"DEArq" <noreply-dearq@gmail.com',
            to: email,
            subject: "Recuperación de contraseña",
            html
        })
    } catch (err) {
        throw new EmailRecoveryError("Ocurrió un error al intentar enviar el correo de recuperación", err)
    }
}