import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your firstName"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters long"],
    maxLength: [30, "Name is too large"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your LastName"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters long"],
    maxLength: [30, "Name is too large"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  subject: {
    type: String,
    required: [true, "Please enter your subject"],
  },
  message: {
    type: String,
    required: [true, "Please enter your message"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
    minLength: [10, "Phone number must be at least 10 characters long"],
    maxLength: [10, "Phone number is too large"],
    validate: [validator.isNumeric, "Please enter a valid phone number"],
  },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
