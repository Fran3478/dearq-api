export class LoginError extends Error {
    constructor (message) {
        super(message)
        this.name = "LoginError"
    }
}

export class NotFoundError extends Error {
    constructor (message) {
        super(message)
        this.name = "NotFoundError"
    }
}

export class EmailVerificationError extends Error {
    constructor (message) {
        super(message)
        this.name = "EmailVerificationError"
    }
}