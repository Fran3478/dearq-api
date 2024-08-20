import {Router} from "express"
import publicRoutes from "./public/index.js"
import privateRoutes from "./private/index.js"

export default () => {
    const app = Router()
    publicRoutes(app)
    privateRoutes(app)
    
    return app
}