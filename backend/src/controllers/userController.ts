import { db } from '../models/localDb.js';

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = { id: Date.now().toString(), ...userData };
        db.users.push(newUser);
        
        res.status(200).json({ success: true, message: "User registered", data: newUser });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const submitRiskProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const profileData = req.body;
        
        db.riskProfiles[userId] = {
            ...profileData,
            score: Math.floor(Math.random() * 10) + 1, // Mock risk score 1-10
            archetype: "Moderate" // Mock archetype
        };
        
        res.status(200).json({ success: true, message: "Risk profile saved", data: db.riskProfiles[userId] });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
