export class LoginError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "LoginError"
        this.orig_error = orig_error
    }
}

export class SignupError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "SignupError"
        this.orig_error = orig_error
    }
}

export class EmailVerificationError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "EmailVerificationError"
        this.orig_error = orig_error
    }
}

export class PostError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostCreationError"
        this.orig_error = orig_error
    }
}
export class PostCreationError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostCreationError"
        this.orig_error = orig_error
    }
}

export class PostViewCreationError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostViewCreationError"
        this.orig_error = orig_error
    }
}

export class PostContentCreationError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostContentCreationError"
        this.orig_error = orig_error
    }
}