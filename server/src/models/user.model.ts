import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { AvailableLoginTypes, AvailableUserRoles, UserLoginType, UserRoleEnum } from "../constants";

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/200x200.png'
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  role: {
    type: String,
    enum: AvailableUserRoles,
    default: UserRoleEnum.CUSTOMER,
    required: true,
  },
  residece: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Residece',
  },
  
  loginType: {
    type: String,
    enum: AvailableLoginTypes,
    default: UserLoginType.USERNAME_PASSWORD,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  refreshToken: {
    type: String,
  },
  forgotPasswordToken: {
    type: String,
  },
  forgotPasswordExpiry: {
    type: Date,
  },
  emailVerificationToken: {
    type: String,
  },
  emailVerificationExpiry: {
    type: Date,
  },

},{timestamps: true})

userSchema.pre("save", async function (next) {
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next(); 
})

export const User = mongoose.model('User', userSchema);