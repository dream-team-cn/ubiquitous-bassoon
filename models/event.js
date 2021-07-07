const { Sequelize, DataTypes, Op } = require("sequelize"); 
const sequelize = new Sequelize(process.env.DBSTRING);

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