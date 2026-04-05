import express from 'express';
import { createUser, submitRiskProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/onboard', createUser);
router.post('/:userId/risk-profile', submitRiskProfile);

export default router;
