import User_Cred from "../model/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";
import Catalog from "../model/Catalog.js";

// ********User Login*********

const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log("password => ", password, "userNmae=>", userName);

    if (!userName || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all the fields" });
    }
    const user = await User_Cred.findOne({ userName: userName });
    if (!user) {
      return res
        .status(409)
        .json({ success: false, message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect Password" });
    }

    generateToken(user._id, user.userName).then((token)=>{
      res.cookie("user_token", token, { httpOnly: true });
      return res
      .status(200)
      .json({ success: true, message: "Login Successful"});
    })
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// ********User Register*********

const userRegister = async (req, res) => {
  try {
    const {
      userName,
      customerName,
      gender,
      preferredCategory,
      password,
    } = req.body;
    
    if (!userName || !customerName || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all the required fields" });
    }

    const user = await User_Cred.findOne({ userName: userName });
  
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User_Cred({
      userName: userName,
      customerName: customerName,
      password: hashedPassword,
      gender: gender,
      preferredCategory: preferredCategory,
    });

    await newUser.save();
   
    generateToken(newUser._id, newUser.userName).then((token)=>{
      res.cookie("user_token", token, { httpOnly: true });
      return res
      .status(200)
      .json({ success: true, message: "Registered Successfully" });
    })
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const homePage = async(req, res) => {
  try{
    const userName = req.params.username;

    const user = await User_Cred.findOne({userName: userName});

    if(!user){
      res.status(404).json({success: false, message: "user not found"});
    } 

    if(user.preferredCategory){
      const recommendations = await Catalog.find({Product_category: user.preferredCategory})
      .sort({Rank:1})
      .limit(10);
      return res.status(200).json({success: true, recommendations})
    }

    const randomRecommendations = await Catalog.aggregate([
      {$sample: {size: 10}}
    ])
    res.status(200).json({success: true, randomRecommendations});
  } catch(error){
    res.status(500).json({success: false, message: "Internal server error"});
    
  }
}

const logout = (req, res) => {
  return res.clearCookie('user_token').status(200).json({success: true, message: "User Logged out"})
};

export { userLogin, userRegister, homePage, logout };
