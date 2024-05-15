import { Schema, model } from "mongoose";
import { AvailableNationalCallCode, NationalCallCode } from "../constants";
import { User } from "./user.model";

const sellerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  fullName: {
    type: String,
    required: [true, "Please provide valid Full name as per government issued id"]
  },
  phoneNumber: {
    type: {
      nationalCallCode: {
        type: String,
        enum: AvailableNationalCallCode,
        default: NationalCallCode.INDIA,
      },
      number: String,
    }
  },
  businessEmail: {
    type: String,
  },
  panNumber: String,
  // please do some research folk developer and add some nessecary data fields.
  // i am having laziness😅
},{timestamps: true});


// if user don't provide any businessEmail we have to save default user email.
sellerSchema.pre("save", async function (next) {
  if(this.businessEmail) return next();
  const user = await User.findById(this.user);

  if(user) {
    this.businessEmail = user.email;
  }
  next();
})

export const Seller = model("Seller", sellerSchema)