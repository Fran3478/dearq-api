export class LoginError extends Error {
    constructor (message) {
        super(message)
        this.name = "LoginError"
    }
}

export class EmailVerificationError extends Error {
    constructor (message) {
        super(message)
        this.name = "EmailVerificationError"
    }
}