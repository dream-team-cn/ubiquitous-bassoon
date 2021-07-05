const { Sequelize, DataTypes } = require("sequelize"); 
require('dotenv').config(); 
const sequelize = new Sequelize(`mysql://root:${process.env.PASSWORD}@localhost:3306/master24`)
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