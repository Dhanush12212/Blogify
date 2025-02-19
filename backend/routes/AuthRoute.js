import express from 'express';
const router = express.Router();
import {login, register } from '../controller/AuthController.js'

router.post('/register',register);
router.post('/login',login);

export default router;