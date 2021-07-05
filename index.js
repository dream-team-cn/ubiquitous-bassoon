const { Sequelize, DataTypes, Op } = require("sequelize"); 
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/master24");
const express = require("express"); 
const app = express(); 

const server = app.listen(5000, async() => {
    await sequelize.authenticate();
    await sequelize.sync(); 
});

const shutdown = () => {
    console.info(`SIGTERM signal received`);
    console.log(`Closing HTTP server`); 
    server.close(async () => {
        console.log(`HTTP server closed`); 
        await sequelize.close(); 
    }); 
};

process.on('SIGTERM', shutdown); 
process.on('SIGINT', shutdown); 

app.use(express.json()); 
