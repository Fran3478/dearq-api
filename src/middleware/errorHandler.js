const ERROR_HANDLERS = {
    LoginError: (res, {message}) => {
        res.status(401).json({error: message})
    },

    SignupError: (res, {message}) => {
        res.status(400).json({error: message})
    },

    EmailVerificationError: (res, {message}) => {
        res.status(403).json({error: message})
    },

    JsonWebTokenError: res => {
        res.status(401).json({error: "Token inexistente o invalido"})
    },

    PostError: (res, {message}) => {
        res.status(500).json({error: message})
    },

    PostNotFoundError: (res, {message}) => {
        res.status(404).json({error: message})
    },

    PostPublishedError: (res, {message}) => {
        res.status(409).json({error: message})
    },

    PostDeleteError: (res, {message}) => {
        res.status(409).json({error: message})
    },

    CategoryError: (res, {message}) => {
        res.status(500).json({error: message})
    },

    PermissionError: (res, {message}) => {
        res.status(403).json({error: message})
    },
    
    UserNotFoundError: (res, {message}) => {
        res.status(404).json({error: message})
    },
    
    CategoryNotFoundError: (res, {message}) => {
        res.status(404).json({error: message})
    },

    CommentError: (res, {message}) => {
        res.status(500).json({error: message})
    },

    CommentNotFoundError: (res, {message}) => {
        res.status(404).json({error: message})
    },

    CommentLikeDupError: (res, {message}) => {
        res.status(409).json({error: message})
    },

    CommentLikeError: (res, {message}) => {
        res.status(500).json({error: message})
    },

    CommentBlockError: (res, {message}) => {
        res.status(409).json({error: message})
    },

    CommentDeleteError: (res, {message}) => {
        res.status(409).json({error: message})
    },

    defaultError: res => {
        res.status(500).json({error: "Ha ocurrido un error inesperado en el servidor"}).end()
    }
}

export default (err, req, res, next) => {
    console.log(err)
    const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
    handler(res, err)
}