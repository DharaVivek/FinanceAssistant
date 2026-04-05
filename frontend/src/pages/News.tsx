const News = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Market Intelligence</h1>
      <p className="text-gray-400">Live news with AI-generated portfolio impact tags.</p>
      
      <div className="flex flex-col gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="glass p-6 rounded-xl flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold">News Headline Stub {i}</h2>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-medium">
                ⚠️ Impacts Your Portfolio
              </span>
            </div>
            <p className="text-sm text-gray-400">Brief summary of the news article here...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
