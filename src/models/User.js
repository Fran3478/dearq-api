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
        type: DataTypes.STRING,
        allowNull: false
    },
    nick: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING
    },
    verified: {
        type: DataTypes.BOOLEAN
    },
    role: {
        type: DataTypes.ENUM({
            values: ["admin", "client"]
        }),
        allowNull: false
    },
    subscribed: {
        type: DataTypes.BOOLEAN
    }
}, {
    hooks: {
        beforeCreate: async function (user) {
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt)
        }
    }
})

User.prototype.checkPass = (password) => {
    return bcrypt.compareSync(password, this.password)
}

export default User