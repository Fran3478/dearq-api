import express from "express"
import config from "./config/index.js"
import loader from "./loaders/index.js"

const {api} = config

async function startServer() {
    const app = express()

    await loader({app})
    
    app.listen(api.port, () => {
        console.log(`🟢 Servidor OK - Puerto: ${api.port}`)
    })
}

startServer()