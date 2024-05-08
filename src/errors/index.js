export class LoginError extends Error {
    constructor (message) {
        super(message)
        this.name = "LoginError"
        this.statusCode = 401
    }
}

export class EmailVerificationError extends Error {
    constructor (message) {
        super(message)
        this.name = "EmailVerificationError"
        this.statusCode = 403
    }
}