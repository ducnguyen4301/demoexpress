const moo = require("mongoose");

moo
  .connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("db connected"))
  .catch((err: any) => {
    console.log("db connection failed: " + err.message || err);
  });
