const { Router } = require('express');
const userRouter = Router();
const user = require('../User/user.controllers');
const { auth } = require('../middleware');


userRouter.post('/user', user.create);
userRouter.get('/user', auth, user.getUser);

module.exports = {userRouter};