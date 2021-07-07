const express = require("express"); 
const router = express.Router(); 
const Event = require("../models/event"); 

router.post("/", async (req,res) => {
    try {
        const event = await Event.create({
            date: req.body.date,
            object: req.body.object,
            locationid:
        })
    }
})