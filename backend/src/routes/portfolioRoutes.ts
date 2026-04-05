import express from 'express';
import { getHoldings, addHolding, analyzePortfolio } from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/:userId/holdings', getHoldings);
router.post('/:userId/holdings', addHolding);
router.get('/:userId/analyze', analyzePortfolio);

export default router;
