import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  location: {
    city: {
      type: String,
    },
    country: {
      type: String,
    }
  }, 
  phone: {
    type: Number,
    required: false,
  },
  isCompany: {
    type: Boolean,
    default:false,
  },
  companyName: {
    type: String
  },
  description: {
    type: String
  },
  shortDescription: {
    type: String
  },
  skills : [
    String
  ],
  projects: [
    {
      title: String,
      description: String,
      images: [String]
    }
  ],
  workExperience: [
    {
      jobRole: String,
      company: String,
      startYear: Number,
      endYear: Number
    }
  ],
 hourlyRate: {
  type: Number
 }
},{
  timestamps:true
});



userSchema.pre('save', async function (next){
  if(!this.isModified("password")) return next()
  
  this.password = await bcrypt.hash(this.password, 10)
  return next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = async function(){
  return jwt.sign({
    _id: this._id,
    email: this.email,
    fullName: this.fullName
  },
  process.env.TOKEN_SECRET,
  {expiresIn: process.env.TOKEN_EXPIRY}
  )
}


const User = mongoose.model('user', userSchema)
export default User