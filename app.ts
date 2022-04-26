import { Request, Response } from "express";
const express = require("express");

const app = express();

app.listen(8000, () => {
  console.log("is running");
});
app.get("/", (req: Request, res: Response) => {
  return res.send('hello express');
});
