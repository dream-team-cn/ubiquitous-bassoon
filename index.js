const { Sequelize, DataTypes, Op } = require("sequelize"); 
require('dotenv').config(); 
const sequelize = new Sequelize(process.env.DBSTRING);

const express = require("express"); 
const app = express(); 
const locationRouter = require("./routes/locations");
const eventRouter = require("./routes/events");
const errorRoutrer = require("./routes/error");
const logRouter = require("./routes/log");
// const cors = require("cors"); 

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
app.use("/locations", locationRouter); 
app.use("/events", eventRouter);
app.use("*", errorRoutrer); 
app.use("/log", logRouter);