import express from "express"
import config from "./config/index.js"
import dbLoader from "./loaders/dbConnection.js"

const {port} = config
const app = express()
app.listen(port, () => {
    console.log(`🟢 Servidor OK - Puerto: ${port}`)
    dbLoader()
})