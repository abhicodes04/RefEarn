import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Wallet, Smartphone, CreditCard, Users, Gift, Calendar, Home, Send } from 'lucide-react';

interface RewardsScreenProps {
  onNavigate: (screen: string) => void;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ onNavigate }) => {
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [withdrawMethod, setWithdrawMethod] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const rewards = [
    { date: '2024-01-15', source: 'Referral - Amit Kumar', amount: 100, type: 'referral' },
    { date: '2024-01-12', source: 'Referral - Priya Singh', amount: 50, type: 'referral' },
    { date: '2024-01-10', source: 'Sign-up Bonus', amount: 50, type: 'bonus' },
    { date: '2024-01-08', source: 'Referral - Rohit Sharma', amount: 100, type: 'referral' },
    { date: '2024-01-05', source: 'Daily Check-in', amount: 10, type: 'bonus' },
  ];

  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'referral': return <Users className="w-5 h-5 text-green-600" />;
      case 'bonus': return <Gift className="w-5 h-5 text-orange-600" />;
      default: return <TrendingUp className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleWithdraw = () => {
    if (withdrawMethod && withdrawAmount) {
      alert(`Withdrawal request of ₹${withdrawAmount} via ${withdrawMethod} submitted successfully!`);
      setShowWithdraw(false);
      setWithdrawMethod('');
      setWithdrawAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">RefEarn</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-red-500 transition-colors"
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
                className="flex items-center px-3 py-2 text-red-500 border-b-2 border-red-500 font-medium"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Rewards
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showWithdraw ? (
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Withdraw Earnings</h1>
            <p className="text-lg text-gray-600">Choose your preferred withdrawal method</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Available Balance</h3>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-6">
                <p className="text-green-100 text-sm font-medium">Total Available</p>
                <h2 className="text-4xl font-bold">₹2,450</h2>
                <p className="text-green-100 text-sm mt-1">Ready for withdrawal</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3">
                    Withdrawal Amount
                  </label>
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="Enter amount (Min: ₹100)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none text-lg"
                    min="100"
                    max="2450"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3">
                    Withdrawal Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-red-300 transition-colors">
                      <input
                        type="radio"
                        name="withdrawMethod"
                        value="UPI"
                        checked={withdrawMethod === 'UPI'}
                        onChange={(e) => setWithdrawMethod(e.target.value)}
                        className="mr-3"
                      />
                      <Smartphone className="w-6 h-6 text-blue-500 mr-3" />
                      <span className="font-medium">UPI Transfer</span>
                    </label>
                    
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-red-300 transition-colors">
                      <input
                        type="radio"
                        name="withdrawMethod"
                        value="Bank"
                        checked={withdrawMethod === 'Bank'}
                        onChange={(e) => setWithdrawMethod(e.target.value)}
                        className="mr-3"
                      />
                      <CreditCard className="w-6 h-6 text-green-500 mr-3" />
                      <span className="font-medium">Bank Transfer</span>
                    </label>
                  </div>
                </div>
                <button
                  onClick={handleWithdraw}
                  disabled={!withdrawMethod || !withdrawAmount || parseInt(withdrawAmount) < 100}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Withdrawal Request
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Rewards</h1>
            <p className="text-lg text-gray-600">Track your earnings and withdraw funds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Wallet className="w-8 h-8" />
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-green-100 text-sm font-medium">Available Balance</p>
              <h2 className="text-3xl font-bold">₹2,450</h2>
              <button
                onClick={() => setShowWithdraw(true)}
                className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Withdraw
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 text-blue-500" />
                <span className="text-green-500 text-sm font-medium">+₹650</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">This Month</p>
              <h3 className="text-2xl font-bold text-gray-800">₹650</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <Gift className="w-8 h-8 text-purple-500" />
                <span className="text-purple-500 text-sm font-medium">All time</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">Total Earned</p>
              <h3 className="text-2xl font-bold text-gray-800">₹5,250</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Transactions</h3>
                <div className="space-y-4">
                  {rewards.map((reward, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                          {getRewardIcon(reward.type)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{reward.source}</p>
                          <p className="text-sm text-gray-500">{reward.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+₹{reward.amount}</p>
                        <p className="text-xs text-gray-500 capitalize">{reward.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Pending Withdrawals</span>
                    <span className="font-semibold text-gray-800">₹0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Successful Withdrawals</span>
                    <span className="font-semibold text-gray-800">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Withdrawn</span>
                    <span className="font-semibold text-gray-800">₹2,800</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Earning Tips</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Refer more friends to earn consistently</li>
                  <li>• Complete daily check-ins for bonus rewards</li>
                  <li>• Share your success stories on social media</li>
                  <li>• Help your referrals get started</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardsScreen;