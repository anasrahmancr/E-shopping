import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const key = process.env.JWT_SECRET;

const generateToken = async (userId, userName) => {
  const token = jwt.sign({ userId: userId, userName: userName }, key, {
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export { generateToken, verifyToken };
