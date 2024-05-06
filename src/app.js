import express from "express"
import config from "./config/index.js"
import loader from "./loaders/index.js"

const {api} = config

function startServer() {
    const app = express()

    loader({app})
    
    app.listen(api.port, () => {
        console.log(`🟢 Servidor OK - Puerto: ${api.port}`)
    })
}

startServer()