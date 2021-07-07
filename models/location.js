const { Sequelize, DataTypes } = require("sequelize"); 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
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