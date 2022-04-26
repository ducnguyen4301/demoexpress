import { Request, Response } from "express";
require('dotenv').config();
require('./db');
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const userRouter = require('./routers/user');

app.use('/api/user', userRouter)

app.listen(PORT, () => {
  console.log("port is running "+ PORT);
});