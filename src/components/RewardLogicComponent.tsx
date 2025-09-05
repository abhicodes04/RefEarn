import React, { useState } from 'react';
import { 
  Gift, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  DollarSign, 
  Users, 
  Target, 
  Calendar,
  TrendingUp,
  Award,
  Star,
  Zap,
  AlertCircle,
  CheckCircle,
  X
} from 'lucide-react';

const RewardLogicComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [showAddRule, setShowAddRule] = useState(false);
  const [rewardSettings, setRewardSettings] = useState({
    signupBonus: 100,
    referralBonus: 100,
    refereeBonus: 100,
    minimumWithdrawal: 100,
    maxDailyWithdrawal: 5000,
    withdrawalFee: 0,
    bonusCooldown: 24
  });

  const rewardRules = [
    {
      id: 1,
      name: 'New User Signup',
      type: 'signup',
      amount: 100,
      conditions: 'Complete phone verification',
      status: 'active',
      usageCount: 1250,
      totalPayout: 125000,
      description: 'One-time bonus for new user registration'
    },
    {
      id: 2,
      name: 'Successful Referral',
      type: 'referral',
      amount: 100,
      conditions: 'Referred user completes signup',
      status: 'active',
      usageCount: 3420,
      totalPayout: 342000,
      description: 'Reward for each successful referral'
    },
    {
      id: 3,
      name: 'Milestone - 10 Referrals',
      type: 'milestone',
      amount: 500,
      conditions: 'Complete 10 successful referrals',
      status: 'active',
      usageCount: 89,
      totalPayout: 44500,
      description: 'Bonus for reaching 10 referrals milestone'
    },
    {
      id: 4,
      name: 'Milestone - 25 Referrals',
      type: 'milestone',
      amount: 1000,
      conditions: 'Complete 25 successful referrals',
      status: 'active',
      usageCount: 23,
      totalPayout: 23000,
      description: 'Bonus for reaching 25 referrals milestone'
    },
    {
      id: 5,
      name: 'Daily Check-in',
      type: 'engagement',
      amount: 10,
      conditions: 'Open app daily for 7 consecutive days',
      status: 'draft',
      usageCount: 0,
      totalPayout: 0,
      description: 'Daily engagement reward'
    }
  ];

  const milestones = [
    { referrals: 5, bonus: 250, achieved: 156 },
    { referrals: 10, bonus: 500, achieved: 89 },
    { referrals: 25, bonus: 1000, achieved: 23 },
    { referrals: 50, bonus: 2500, achieved: 8 },
    { referrals: 100, bonus: 5000, achieved: 2 }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'signup':
        return <Users className="w-4 h-4 text-blue-500" />;
      case 'referral':
        return <Gift className="w-4 h-4 text-green-500" />;
      case 'milestone':
        return <Award className="w-4 h-4 text-purple-500" />;
      case 'engagement':
        return <Star className="w-4 h-4 text-orange-500" />;
      default:
        return <DollarSign className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'draft':
        return 'bg-yellow-100 text-yellow-700';
      case 'inactive':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleSettingChange = (key: string, value: number) => {
    setRewardSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const totalRewardsPaid = rewardRules.reduce((sum, rule) => sum + rule.totalPayout, 0);
  const activeRules = rewardRules.filter(rule => rule.status === 'active').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Reward Logic Management</h2>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowAddRule(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Rule
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Gift className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Rules</p>
              <p className="text-2xl font-bold text-gray-900">{activeRules}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Paid</p>
              <p className="text-2xl font-bold text-gray-900">₹{totalRewardsPaid.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">₹68,500</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Per User</p>
              <p className="text-2xl font-bold text-gray-900">₹438</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {[
              { id: 'basic', label: 'Basic Settings', icon: Settings },
              { id: 'rules', label: 'Reward Rules', icon: Gift },
              { id: 'milestones', label: 'Milestones', icon: Award },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Basic Settings Tab */}
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Basic Reward Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Signup Bonus (₹)
                    </label>
                    <input
                      type="number"
                      value={rewardSettings.signupBonus}
                      onChange={(e) => handleSettingChange('signupBonus', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Referral Bonus (₹)
                    </label>
                    <input
                      type="number"
                      value={rewardSettings.referralBonus}
                      onChange={(e) => handleSettingChange('referralBonus', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Referee Bonus (₹)
                    </label>
                    <input
                      type="number"
                      value={rewardSettings.refereeBonus}
                      onChange={(e) => handleSettingChange('refereeBonus', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum Withdrawal (₹)
                    </label>
                    <input
                      type="number"
                      value={rewardSettings.minimumWithdrawal}
                      onChange={(e) => handleSettingChange('minimumWithdrawal', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Daily Withdrawal (₹)
                    </label>
                    <input
                      type="number"
                      value={rewardSettings.maxDailyWithdrawal}
                      onChange={(e) => handleSettingChange('maxDailyWithdrawal', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Withdrawal Fee (₹)
                    </label>
                    <input
                      type="number"
                      value={rewardSettings.withdrawalFee}
                      onChange={(e) => handleSettingChange('withdrawalFee', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </button>
              </div>
            </div>
          )}

          {/* Reward Rules Tab */}
          {activeTab === 'rules' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Reward Rules</h3>
              
              <div className="space-y-4">
                {rewardRules.map((rule) => (
                  <div key={rule.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          {getTypeIcon(rule.type)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                          <p className="text-sm text-gray-600">{rule.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">₹{rule.amount}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rule.status)}`}>
                            {rule.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-600 hover:text-gray-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Conditions:</span>
                        <p className="font-medium text-gray-900">{rule.conditions}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Usage Count:</span>
                        <p className="font-medium text-gray-900">{rule.usageCount.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Total Payout:</span>
                        <p className="font-medium text-green-600">₹{rule.totalPayout.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Milestones Tab */}
          {activeTab === 'milestones' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Referral Milestones</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="text-2xl font-bold text-purple-600">₹{milestone.bonus}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">{milestone.referrals} Referrals</h4>
                      <p className="text-sm text-gray-600">
                        {milestone.achieved} users achieved this milestone
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${Math.min((milestone.achieved / 100) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Milestone Configuration</h4>
                    <p className="text-sm text-yellow-700">
                      Milestones are automatically triggered when users reach the specified number of successful referrals. 
                      You can modify these thresholds and rewards from the settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Reward Analytics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Most Used Rewards</h4>
                  <div className="space-y-3">
                    {rewardRules
                      .sort((a, b) => b.usageCount - a.usageCount)
                      .slice(0, 4)
                      .map((rule, index) => (
                      <div key={rule.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold flex items-center justify-center mr-3">
                            {index + 1}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{rule.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{rule.usageCount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Highest Payouts</h4>
                  <div className="space-y-3">
                    {rewardRules
                      .sort((a, b) => b.totalPayout - a.totalPayout)
                      .slice(0, 4)
                      .map((rule, index) => (
                      <div key={rule.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full text-xs font-bold flex items-center justify-center mr-3">
                            {index + 1}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{rule.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">₹{rule.totalPayout.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Rule Modal */}
      {showAddRule && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setShowAddRule(false)} />
            <div className="relative bg-white rounded-lg max-w-lg w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Add New Reward Rule</h3>
                <button onClick={() => setShowAddRule(false)}>
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rule Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter rule name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rule Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="signup">Signup Bonus</option>
                    <option value="referral">Referral Reward</option>
                    <option value="milestone">Milestone Bonus</option>
                    <option value="engagement">Engagement Reward</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reward Amount (₹)</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Conditions</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter conditions for this reward"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter description"
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddRule(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add Rule
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardLogicComponent;
