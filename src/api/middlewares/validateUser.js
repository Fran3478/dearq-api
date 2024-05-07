import validate from "../../services/auth/validators/index.js"
const validateUser = [
    validate.user.username,
    validate.user.email,
    validate.user.password
]

export default validateUser