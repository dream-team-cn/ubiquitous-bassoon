const { Router } = require("express");
const userRouter = Router();
const User = require("../models/user");
const {auth} = require("../middleware");
const jwt = require('jsonwebtoken');


// const {auth} = require("../middeware");

userRouter.post("/", async (req, res) => {
  try {
      console.log(req.body)
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token: jwt.sign({ name: req.body.name }, process.env.SECRET),
    });
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

userRouter.get("/", auth, async (req, res) => {
  try {    

    const user = await User.findOne(req.name);
console.log(req.token)
    if (!user) {
      throw new Error("no user");
    } else if (req.token === undefined){
        console.log("rereroeoroeowro")
     } else if (user.token !== req.token) {
      throw new Error("no Token");
    } 
    else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = userRouter;
