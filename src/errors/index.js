export class LoginError extends Error {
    constructor (message) {
        super(message)
        this.name = "LoginError"
        this.statusCode = 401
    }
}

export class NotFoundError extends Error {
    constructor (message) {
        super(message)
        this.name = "NotFoundError"
        this.statusCode = 404
    }
}

export class EmailVerificationError extends Error {
    constructor (message) {
        super(message)
        this.name = "EmailVerificationError"
        this.statusCode = 403
    }
}