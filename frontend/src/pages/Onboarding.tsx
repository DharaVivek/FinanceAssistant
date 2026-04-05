const Onboarding = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-4">
      <div className="glass w-full max-w-2xl p-8 rounded-2xl flex flex-col gap-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Welcome to AI Financial Advisor
        </h1>
        <p className="text-gray-400">Let's build your risk profile.</p>
        
        <div className="h-64 border border-dashed border-gray-700 rounded-lg flex items-center justify-center text-gray-500">
          Risk Wizard Form Stub Here
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
