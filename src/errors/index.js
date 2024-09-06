import { or } from "sequelize"

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

export class PermissionError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PermissionError"
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

export class EmailRecoveryError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "EmailRecoveryError"
        this.orig_error = orig_error
    }
}

export class UserNotFoundError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "UserNotFoundError"
        this.orig_error = orig_error
    }
}

export class RecoveryError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "RecoveryError"
        this.orig_error = orig_error
    }
}

export class PostError extends Error {
    constructor (message, orig_error, status) {
        super(message)
        this.name = "PostError"
        this.orig_error = orig_error
        this.status = status
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

export class PostSanitizeError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostSanitizeError"
        this.orig_error = orig_error
    }
}

export class PostCheckError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostCheckError"
        this.orig_error = orig_error
    }
}

export class PostPublishedError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostPublishedError"
        this.orig_error = orig_error
    }
}

export class PostSearchError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostFindError"
        this.orig_error = orig_error
    }
}

export class PostNotFoundError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostNotFoundError"
        this.orig_error = orig_error
    }
}

export class PostDeleteError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostDeleteError"
        this.orig_error = orig_error
    }
}

export class PostUpdateError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "PostUpdateError"
        this.orig_error = orig_error
    }
}

export class CategoryError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CategoryError"
        this.orig_error = orig_error
    }
}

export class CategoryNotFoundError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CategoryNotFoundError"
        this.orig_error = orig_error
    }
}

export class CommentError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentError"
        this.orig_error = orig_error
    }
}

export class CommentCreationError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentCreationError"
        this.orig_error = orig_error
    }
}

export class CommentSearchError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentSearchError"
        this.orig_error = orig_error
    }
}

export class CommentNotFoundError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentNotFoundError"
        this.orig_error = orig_error
    }
}

export class CommentUpdateError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentUpdateError"
        this.orig_error = orig_error
    }
}

export class CommentDeleteError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentDeleteError"
        this.orig_error = orig_error
    }
}

export class CommentLikeSearchError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentLikeSearchError"
        this.orig_error = orig_error
    }
}

export class CommentLikeNotFoundError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentNotFoundError"
        this.orig_error = orig_error
    }
}

export class CommentLikeDupError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentLikeDupError"
        this.orig_error = orig_error
    }
}

export class CommentLikeCreationError extends Error {
    constructor (message, orig_error) {
        super(message)
        this.name = "CommentLikeCreationError"
        this.orig_error = orig_error
    }
}

export class CommentLikeCountError extends Error {
    constructor(message, orig_error) {
        super(message)
        this.name = "CommentLikeCountError"
        this.orig_error = orig_error
    }
}

export class CommentLikeError extends Error {
    constructor(message, orig_error) {
        super(message)
        this.name = "CommentLikeError"
        this.orig_error = orig_error
    }
}