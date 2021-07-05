const express = require("express"); 
const Event = require("../models/event"); 
const router = express.Router(); 

router.get("/", async(req, res) => {
    const events = await Event.findAll(); 
    res.status(200).json(events); 
});

module.exports = router; 
