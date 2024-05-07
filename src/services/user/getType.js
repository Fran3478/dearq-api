const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default (user) => {
    return (regexEmail.test(user) ? "email" : "username")
}