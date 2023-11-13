import express from "express";
import {userLogin, userRegister, homePage, logout} from '../controllers/user.js';
import auth from "../middlewares/auth.js";

const router = express.Router();
// User Logging Api
router.post('/user-login', userLogin); 
router.post('/user-register', userRegister);
// product recommendations Api
router.get('/home/:userName',auth, homePage);

router.get('/logout', auth, logout);

export default router; 