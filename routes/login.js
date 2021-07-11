const { Router } = require("express");
const loginRouter = Router();
const User = require("../models/user");
const {auth} = require("../middleware");
const jwt = require('jsonwebtoken');

// const {auth} = require("../middeware");

loginRouter.post("/", async (req, res) => {
  try {
      console.log(req.body)
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token: jwt.sign({ name: req.body.name }, process.env.SECRET),
    });
    console.log(user)
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = loginRouter;