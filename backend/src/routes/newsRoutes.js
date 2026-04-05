import express from 'express';
import { getPersonalizedNews } from '../controllers/newsController.js';

const router = express.Router();

router.get('/:userId/feed', getPersonalizedNews);

export default router;
