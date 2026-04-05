import express from 'express';
import { processChat } from '../controllers/chatController.js';

const router = express.Router();

router.post('/:userId', processChat);

export default router;
