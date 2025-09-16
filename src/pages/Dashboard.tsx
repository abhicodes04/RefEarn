import React from 'react';
import { Share2, Copy, Users, TrendingUp, Gift, Wallet, Home, Send, LogOut } from 'lucide-react';

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">RefEarn</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="flex items-center px-3 py-2 text-red-500 border-b-2 border-red-500 font-medium"
              >
                <Home className="w-5 h-5 mr-2" />
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('invite')}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Invite
              </button>
              <button 
                onClick={() => onNavigate('rewards')}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Rewards
              </button>
              <button 
                onClick={() => onNavigate('welcome')}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Hello, Rajesh!</h1>
          <p className="text-lg text-gray-600">Welcome back to your dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Wallet className="w-8 h-8" />
              <div className="text-right">
                <p className="text-red-100 text-sm">This Month</p>
                <p className="text-white text-lg font-semibold">+₹650</p>
              </div>
            </div>
            <p className="text-red-100 text-sm font-medium">Total Balance</p>
            <h2 className="text-3xl font-bold">₹2,450</h2>
            <p className="text-red-100 text-xs mt-1">Available for withdrawal</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-green-500 text-sm font-medium">+3 this month</span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Referrals</p>
            <h3 className="text-2xl font-bold text-gray-800">15</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Gift className="w-8 h-8 text-green-500" />
              <span className="text-green-500 text-sm font-medium">80% rate</span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Successful</p>
            <h3 className="text-2xl font-bold text-gray-800">12</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <span className="text-orange-500 text-sm font-medium">3 pending</span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
            <h3 className="text-2xl font-bold text-gray-800">80%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;