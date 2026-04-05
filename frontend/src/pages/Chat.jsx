const Chat = () => {
    return (
      <div className="flex flex-col h-full gap-6">
        <h1 className="text-3xl font-bold">AI Financial Assistant</h1>
        <p className="text-gray-400">Ask anything. The agent knows your portfolio and the market context.</p>
        
        <div className="flex-1 glass rounded-xl flex flex-col overflow-hidden">
          {/* Chat History Area */}
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
            <div className="self-start glass px-4 py-3 rounded-2xl max-w-[80%]">
              Hello! I'm your Agentic AI Advisor. How can I help you optimize your portfolio today?
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Ask about SIP vs Real Estate, specific market news..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Chat;
