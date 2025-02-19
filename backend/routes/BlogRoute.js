import express from 'express';
const router = express.Router();
import { createBlog, getAllBlog } from '../controller/BlogController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

router.post('/', authMiddleware, createBlog);
router.get('/', authMiddleware, getAllBlog);

export default router;
