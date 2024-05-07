export default (email) =>  {
    const [username, domain] = email.split("@")
    if(username.length < 3) return username + "." + domain.slice(0, 1)
    if(username.length > 20) return username.slice(0, 20)
    return username
}