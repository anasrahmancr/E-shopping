import express from "express";
import {userLogin, userRegister} from '../controllers/user.js';

const router = express.Router();

router.post('/user-login', userLogin); 
router.post('/user-register', userRegister);

export default router;