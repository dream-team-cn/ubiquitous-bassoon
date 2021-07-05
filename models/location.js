const { Sequelize, DataTypes } = require("sequelize"); 
const sequelize = new Sequelize(process.env.DBSTRING)
const Location = sequelize.define("location", {
    name: {
        type: DataTypes.STRING, 
        allowNul: false
    },
    region: {
        type: DataTypes.STRING, 
        allowNull: false
    }
}, {}); 

module.exports = Location; 