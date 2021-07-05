const { Sequelize, DataTypes, Op } = require("sequelize"); 
require('dotenv').config(); 
const sequelize = new Sequelize(`mysql://root:${process.env.PASSWORD}@localhost:3306/master24`)

const Event = sequelize.define("event", {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    object: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "locations",
            key: "id"
        }
    }
});

module.exports = Event; 