import expressLoader from "./express.js"
import dbLoader from "./dbConnection.js"

export default ({app}) => {
    dbLoader()
    expressLoader({app})
}