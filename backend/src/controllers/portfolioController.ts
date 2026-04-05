import { db } from '../models/localDb.js';

export const getHoldings = async (req, res) => {
    try {
        const { userId } = req.params;
        const userHoldings = db.holdings[userId] || [];
        res.status(200).json({ success: true, data: userHoldings });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const addHolding = async (req, res) => {
    try {
        const { userId } = req.params;
        const holdingData = req.body;
        
        if (!db.holdings[userId]) {
            db.holdings[userId] = [];
        }
        
        const newHolding = { id: Date.now().toString(), ...holdingData };
        db.holdings[userId].push(newHolding);
        
        res.status(200).json({ success: true, message: "Holding added", data: newHolding });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const analyzePortfolio = async (req, res) => {
    try {
        const { userId } = req.params;
        // Mock analysis
        const analysis = { status: "Demo Analysis complete" };
        res.status(200).json({ success: true, analysis });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
