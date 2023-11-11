import express from "express";
import {userLogin, userRegister, homePage, logout} from '../controllers/user.js';
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post('/user-login', userLogin); 
router.post('/user-register', userRegister);

router.get('/home/:username',auth, homePage);

router.get('/logout', auth, logout);

export default router; 