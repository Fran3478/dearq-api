const ERROR_HANDLERS = {
    LoginError: (res, {message}) => {
        res.status(401).json({error: message})
    },

    EmailVerificationError: (res, {message}) => {
        res.status(403).json({error: message})
    },

    JsonWebTokenError: res => {
        res.status(401).json({error: "Token inexistente o invalido"})
    },

    defaultError: res => {
        res.status(500).json({error: "Ha ocurrido un error interno en el servidor"}).end()
    }
}

export default (err, req, res, next) => {
    const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
    handler(res, err)
}