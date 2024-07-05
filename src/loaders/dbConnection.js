import {sequelize} from "../models/index.js"

export default () => {
    console.log("🔵 Testing database connection...")
    sequelize.authenticate()
    .then(() => console.log("🟢 Database connection - OK"))
    .catch( err => console.log(`🔴 Database connection - ERROR \nError: ${err}`))
    sequelize.sync()
    .then(() => console.log("🟢 Database synchronization - OK"))
    .catch( err => console.log(`🔴 Database synchronization - ERROR \nError: ${err}`))
} 