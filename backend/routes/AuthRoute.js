import express from 'express';
const router = express.Router();
import {Login, Register } from '../controller/AuthController.js'

router.post('/register', Register);
router.post('/login', Login);

export default router;