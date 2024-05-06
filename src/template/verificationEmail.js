import config from "../config/index.js"

const {email} = config

export default ({username, token}) => {
    const html = `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DEArq - Verificación de Email</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        
            <table style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px;">
                <tr>
                    <td style="text-align: center;">
                        <img src="https://example.com/dearq_logo.png" alt="DEArq Logo" style="max-width: 150px;">
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px;">
                        <h2 style="margin-top: 0;">¡Bienvenido a DEArq!</h2>
                        <p>Hola ${username}! 👋</p>
                        <p>Gracias por registrarte en DEArq. Por favor, haz clic en el siguiente enlace para verificar tu dirección de correo electrónico:</p>
                        <p style="text-align: center;"><a href="${email.verificationUrl, "/", token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verificar Email</a></p>
                        <p>Si no te has registrado en DEArq, puedes ignorar este correo electrónico.</p>
                        <p>¡Gracias!</p>
                        <p>Equipo DEArq</p>
                    </td>
                </tr>
            </table>
        </body>
    </html>`
    return html
}