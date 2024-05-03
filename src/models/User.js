import { DataTypes } from "sequelize"
import bcrypt from "bcrypt"
import dbConfig from "../config/db.js"

const User = dbConfig.define("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.UUID
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    role: {
        type: DataTypes.ENUM({
            values: ["admin", "user", "subscriber"]
        }),
        defaultValue: "user",
        allowNull: false
    },
    subscribed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

}, {
    hooks: {
        beforeCreate: async function (user) {
            if(user.role !== "subscriber"){
                const salt = await bcrypt.genSalt(10)
                user.password = await bcrypt.hash(user.password, salt)
            }
        },
        afterCreate: (user) => {
            delete user.dataValues.password
            delete user.dataValues.token
            delete user.dataValues.createdAt
            delete user.dataValues.updatedAt
        }
    },
    scopes: {
        removeSensitive: {
            attributes: {
                exclude: ["password", "token", "verified", "createdAt", "updatedAt"]
            }
        }
    }
})

User.prototype.checkPass = (password) => {
    return bcrypt.compareSync(password, this.password)
}

export default User