import db from "../config/db.js"
import "./defineModels.js"

export default () => {
    console.log("🔵 Testing database connection...")
    db.authenticate()
    .then(() => console.log("🟢 Database connection - OK"))
    .catch( err => console.log(`🔴 Database connection - ERROR \nError: ${err}`))
    db.sync()
    .then(() => console.log("🟢 Database synchronization - OK"))
    .catch( err => console.log(`🔴 Database synchronization - ERROR \nError: ${err}`))
} 