import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  idCard: {
    type: Number,
    require: true,
    trim: true
  },
  creditCard: {
    type: Number,
    require: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
  mail: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  }
});

export const User = mongoose.model("User", UserSchema);
