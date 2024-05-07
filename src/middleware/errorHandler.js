export default (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Ha ocurrido un error interno en el servidor"
    res.status(statusCode).json({message}).end()
}