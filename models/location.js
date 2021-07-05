const { Sequelize, DataTypes } = require("sequelize"); 
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/master24");

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