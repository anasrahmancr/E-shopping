import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ********User Login*********

const userLogin = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log(
      "userName => ",
      userName,
      "password => ",
      password,
      "email=>",
      email
    );

    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all the fields" });
    }
    const user = await User.findOne({ userName: userName });
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
    const key = process.env.JWT_SECRET;
    const token = jwt.sign({ userId: user._id, email: email }, key, {
      expiresIn: "1h",
    });
    console.log("token", token);

    res.cookie("user-token", token, { httpOnly: true });

    return res.status(200).json({ success: true, message: "Login Successful" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// ********User Register*********

const userRegister = async(req, res) => {

    try {

        if (!userName || !email || !customerName || !password) {
            return res
              .status(400)
              .json({ success: false, message: "Fill all the fields" });
          }

        const { userName, email, customerName, gender, preferredCategory, password } = req.body;
        console.log(
          "userName => ",
          userName,
          "customerName =>",
          customerName,
          "password => ",
          password,
          "email=>",
          email, gender, preferredCategory
        );
    
        
        const user = await User.findOne({ userName: userName });
        if (user) {
          return res
            .status(409)
            .json({ success: false, message: "Email already exists" });
        }
        
        const key = process.env.JWT_SECRET;
        const token = jwt.sign({ userId: user._id, email: email }, key, {
          expiresIn: "1h",
        });
        console.log("token", token);
    
        res.cookie("user-token", token, { httpOnly: true });
    
        return res.status(200).json({ success: true, message: "Login Successful" });
      } catch (error) {
        return res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
    };

export { userLogin, userRegister };
