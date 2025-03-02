import express from 'express';
const router = express.Router();
import { createBlog, getAllBlogs, deleteBlog, updateBlog, getBlog } from '../controller/BlogController.js';
import authMiddleware from '../middleware/AuthMiddleware.js'; 

router.post('/createBlog', authMiddleware, createBlog); 
router.get('/getAllBlogs', authMiddleware, getAllBlogs);
router.get("/getBlog/:id", authMiddleware, getBlog); 
router.delete('/deleteBlog/:id', authMiddleware, deleteBlog);
router.put("/updatedBlog/:id", authMiddleware, updateBlog);  
  
export default router;
 