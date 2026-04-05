const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
      <p className="text-gray-400">Your agentic overview of holdings, risks, and recommendations.</p>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl col-span-2">
          <h2 className="text-xl font-semibold mb-4">Holdings Stub</h2>
          <div className="h-48 border border-dashed border-gray-700 rounded-lg flex items-center justify-center text-gray-500">Table Component Here</div>
        </div>
        <div className="glass p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Allocation Stub</h2>
          <div className="h-48 border border-dashed border-gray-700 rounded-lg flex items-center justify-center text-gray-500">Chart Component Here</div>
        </div>
      </div>

      <div className="glass p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
        <div className="h-32 border border-dashed border-gray-700 rounded-lg flex items-center justify-center text-gray-500">Recommendation Cards Here</div>
      </div>
    </div>
  );
};

export default Dashboard;
