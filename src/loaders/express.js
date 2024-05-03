import bodyParser from "body-parser"
import cors from "cors"
import routes from "../api/index.js"
import config from "../config/index.js"

const {api} = config

export default ({app}) => {
    app.get("/status", (req, res) => {
        res.json({status: "OK"}).status(200).end()
    })
    app.head("/status", (req, res) => {
        res.status(200).end()
    })
    app.use(cors())
    app.use(bodyParser.json())
    app.use(api.prefix, routes())
}