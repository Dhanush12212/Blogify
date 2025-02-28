import express from 'express';
const router = express.Router();
import { createBlog, getAllBlogs, deleteBlog } from '../controller/BlogController.js';
import authMiddleware from '../middleware/AuthMiddleware.js'; 

router.post('/createBlog', authMiddleware, createBlog); 
router.get('/getAllBlogs', authMiddleware, getAllBlogs);
router.delete('/deleteBlog/:id', authMiddleware, deleteBlog);


export default router;
 