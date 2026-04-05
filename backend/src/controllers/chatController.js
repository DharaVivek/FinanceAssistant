export const processChat = async (req, res) => {
    try {
        const { userId } = req.params;
        const { message } = req.body;
        // TODO: Load portfolio context, invoke AdvisorChatAgent LLM completion
        res.status(200).json({ success: true, reply: "Stub LLM response for: " + message });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
