const { Sequelize, DataTypes, Op } = require("sequelize"); 
require('dotenv').config(); 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const express = require("express"); 
const Location = require("./models/location");
const Event = require("./models/event");
const app = express(); 
const locationRouter = require("./routes/locations");
const eventRouter = require("./routes/events");
const errorRoutrer = require("./routes/error");
const logRouter = require("./routes/log");
// const cors = require("cors"); 

const server = app.listen(process.env.PORT || 5000, async() => {
    try { 
        await sequelize.authenticate();
        await Location.sync(); 
        await Event.sync();     
        run()
    } catch (err) {
        console.log(err); 
    }
});

const shutdown = () => {
    console.info(`SIGTERM signal received`);
    console.log(`Closing HTTP server`); 
    server.close(async () => {
        console.log(`HTTP server closed`); 
        await sequelize.close(); 
    }); 
};

const run = async () => {
    console.log("run is running");
    try {
        const preston = await Location.create({name: "Preston", region: "North West"}); 
        await Event.create({date: new Date("2009-01-01"), object: "bright white flashing lights", locationid: preston.id})
    
    } catch (err) {
        console.log(err);
    }
}

process.on('SIGTERM', shutdown); 
process.on('SIGINT', shutdown); 

app.use(express.json()); 
app.use("/locations", locationRouter); 
app.use("/events", eventRouter);
app.use("*", errorRoutrer); 
app.use("/log", logRouter);