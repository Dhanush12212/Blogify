import express from 'express';
const router = express.Router();

router.get('/', Blog);
router.post('/', Blog);

export default router;
