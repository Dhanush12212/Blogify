import express from 'express';
const router = express.Router();
import { createBlog,  } from '../controller/BlogController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

router.post('/createBlog', authMiddleware, createBlog); 
router.get('/getAllBlogs', authMiddleware, getAllBlogs); 


export default router;
 