import express from 'express';
const router = express.Router();
import {Login, Register, Logout } from '../controller/AuthController.js'

router.post('/register', Register);
router.post('/login', Login);
router.post('/logout', Logout);

export default router;