const { Sequelize, DataTypes, Op } = require("sequelize"); 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const Event = sequelize.define("event", {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    object: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    locationid: {
        type: DataTypes.INTEGER,
        references: {
            model: "locations",
            key: "id"
        }
    }
});

module.exports = Event; 