import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};


export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};

export const loginUser = async (req, res) => {
 try {
   const {email, password} = req.body
 
   if(!(email || password)){
     return res.status(400).send('All the fields are required')
   }
 
   const user = await User.findOne({email})
   if(!user) return res.status(404).send("Email doesn't exist")
 
   const isPasswordCorrect = await user.isPasswordCorrect(password)
   if(!isPasswordCorrect) return res.status(400).send('Incorrect password.')
 
   const token = await user.generateToken()
 
   const cookieOptions = {
     httpOnly: true,
     secure: true
   }
 
   return res
   .status(200)
   .cookie("token", token)
   .send('User logged in successfully!')
 } catch (error) {
  console.log('loginUser :: Error: ', error)
    return res.status(500).send('Something went wrong! Please try again.')
 }
}

export const registerUser = async (req, res, next) => {
  try {
    if(req.body.email === "") return next(createError(400, "Email cannot be empty"))
  
    const userAlreadyExists = await User.findOne({email: req.body.email})
  
    if(userAlreadyExists){
      return next(createError(409, "Email already exists!"));
    }
  
    //create user in database
    //upload images on cloudinary
  
    await User.create({
      ...req.body
    })
  
    const userCreated = await User.findOne({email: req.body.email})
    if(!userCreated){
      return res.status(400).send("User creation failed! Try again.")
    }

    return res.status(201).send('User created successfully.')
  
  } catch (error) {
    console.log('registerUser :: Error: ', error)
    return res.status(500).send('Something went wrong! Please try again.')
  }
}

export const getAllProfessionals = async(req, res) => {
  try {
    const allUsers = await User.find({isCompany: false}).exec()
    return res.status(200).send(allUsers)
  } catch (error) {
    console.log('getAllProfessionals :: Error: ', error)
    return res.status(500).send(error.message || "Something went wrong! Try again.")
  }
}

export const getAllCompanies = async (req, res) => {
  try {
    const allCompanies = await User.find({isCompany: true}).exec()
    return res.status(200).send(allCompanies)
  } catch (error) {
    console.log('getAllCompanies :: Error: ', error)
    return res.status(500).send(error.message || "Something went wrong! Try again.")
  }
}


export const editUser = async (req, res) => {
  try {
     const updateResult = await User.updateOne({_id: req.user._id},{$set: {...req.body}})
     if(updateResult.modifiedCount === 0){
      return res.status(200).send('Changes are not made!')
     }

     return res.status(200).send('Update Successful!')
  } catch (error) {
    console.log('getAllCompanies :: Error: ', error)
    return res.status(500).send(error.message || "Something went wrong! Try again.")
  }
}



