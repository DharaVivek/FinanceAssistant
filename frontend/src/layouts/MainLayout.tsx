import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Newspaper, MessageSquare } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 glass p-6 flex flex-col gap-8">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          AI Advisor
        </div>
        
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/news" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
            <Newspaper size={20} /> Market News
          </Link>
          <Link to="/chat" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
            <MessageSquare size={20} /> AI Chat
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 border-l border-white/10">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
