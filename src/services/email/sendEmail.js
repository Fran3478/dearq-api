import transporter from "../../config/emailer.js"
import htmlGen from "../../template/verificationEmail.js"

export default async ({username, email, token}) => {
    try {
        const html = htmlGen({username, token})
        const mail = await transporter.sendMail({
            from: '"DEArq" <noreply-dearq@gmail.com',
            to: email,
            subject: "Verificación de cuenta",
            html
        })
    } catch (err) {
        throw new EmailVerificationError("Ocurrió un error al intentar enviar el correo de verificación", err)
    }
}