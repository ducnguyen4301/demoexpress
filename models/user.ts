import { Schema,model} from "mongoose";
const mongoose = require("mongoose");

interface userProps {
  userName: String;
  passWord: String;
  email: String;
}

const userSchema = new Schema<userProps>({
  userName: { type: String, required: true },
  passWord: { type: String, required: true },
  email: { type: String, required: true },
});

const User = model<userProps>('User', userSchema);
