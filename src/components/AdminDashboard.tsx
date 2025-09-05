import React, { useState } from 'react';
import AnalyticsComponent from './AnalyticsComponent';
import UserManagementComponent from './UserManagementComponent';
import ProductManagementComponent from './ProductManagementComponent';
import RewardLogicComponent from './RewardLogicComponent';
import StaffManagementComponent from './StaffManagementComponent';
import { 
  BarChart3, 
  Users, 
  CreditCard, 
  Gift, 
  Settings, 
  UserPlus, 
  TrendingUp, 
  DollarSign,
  Eye,
  CheckCircle,
  XCircle,
  Filter,
  Download,
  Search,
  Bell,
  Menu,
  X,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Shield,
  GitBranch,
  ChevronRight,
  ChevronDown,
  User
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (screen: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedBaseUser, setSelectedBaseUser] = useState<string | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  // Mock data
  const stats = {
    totalUsers: 1250,
    totalReferrals: 3420,
    pendingPayouts: 48500,
    monthlyGrowth: 12.5,
    activeUsers: 890,
    conversionRate: 65.4
  };

  const recentReferrals = [
    { id: 1, referrer: 'Rajesh Kumar', referee: 'Amit Singh', amount: 100, status: 'completed', date: '2024-01-15' },
    { id: 2, referrer: 'Priya Sharma', referee: 'Neha Gupta', amount: 100, status: 'pending', date: '2024-01-15' },
    { id: 3, referrer: 'Rohit Verma', referee: 'Suresh Patel', amount: 100, status: 'completed', date: '2024-01-14' },
    { id: 4, referrer: 'Anita Das', referee: 'Kavita Roy', amount: 100, status: 'failed', date: '2024-01-14' }
  ];

  const withdrawalRequests = [
    { id: 1, user: 'Rajesh Kumar', amount: 2450, method: 'UPI', status: 'pending', date: '2024-01-15' },
    { id: 2, user: 'Priya Sharma', amount: 1200, method: 'Bank', status: 'approved', date: '2024-01-14' },
    { id: 3, user: 'Rohit Verma', amount: 800, method: 'Wallet', status: 'pending', date: '2024-01-14' },
    { id: 4, user: 'Anita Das', amount: 500, method: 'UPI', status: 'declined', date: '2024-01-13' }
  ];

  const topReferrers = [
    { name: 'Rajesh Kumar', referrals: 45, earnings: 4500, code: 'RAJ2024' },
    { name: 'Priya Sharma', referrals: 38, earnings: 3800, code: 'PRI2024' },
    { name: 'Rohit Verma', referrals: 32, earnings: 3200, code: 'ROH2024' },
    { name: 'Anita Das', referrals: 28, earnings: 2800, code: 'ANI2024' }
  ];

  // Base users who started referral chains (users with no referrer)
  const baseUsers = [
    { 
      id: 'raj001', 
      name: 'Rajesh Kumar', 
      code: 'RAJ2024', 
      joinDate: '2024-01-01',
      totalChainReferrals: 25,
      totalChainEarnings: 3500,
      directReferrals: 5
    },
    { 
      id: 'pri001', 
      name: 'Priya Sharma', 
      code: 'PRI2024', 
      joinDate: '2024-01-02',
      totalChainReferrals: 18,
      totalChainEarnings: 2800,
      directReferrals: 4
    },
    { 
      id: 'roh001', 
      name: 'Rohit Verma', 
      code: 'ROH2024', 
      joinDate: '2024-01-03',
      totalChainReferrals: 15,
      totalChainEarnings: 2200,
      directReferrals: 3
    },
    { 
      id: 'ani001', 
      name: 'Anita Das', 
      code: 'ANI2024', 
      joinDate: '2024-01-05',
      totalChainReferrals: 12,
      totalChainEarnings: 1800,
      directReferrals: 4
    }
  ];

  // Mock referral chain data structure
  const referralChains: Record<string, any> = {
    'raj001': {
      id: 'raj001',
      name: 'Rajesh Kumar',
      code: 'RAJ2024',
      level: 0,
      earnings: 700,
      joinDate: '2024-01-01',
      children: [
        {
          id: 'raj002',
          name: 'Amit Singh',
          code: 'AMI2024',
          level: 1,
          earnings: 400,
          joinDate: '2024-01-05',
          children: [
            {
              id: 'raj003',
              name: 'Neha Gupta',
              code: 'NEH2024',
              level: 2,
              earnings: 200,
              joinDate: '2024-01-10',
              children: [
                {
                  id: 'raj004',
                  name: 'Suresh Patel',
                  code: 'SUR2024',
                  level: 3,
                  earnings: 100,
                  joinDate: '2024-01-12',
                  children: []
                }
              ]
            },
            {
              id: 'raj005',
              name: 'Kavita Roy',
              code: 'KAV2024',
              level: 2,
              earnings: 150,
              joinDate: '2024-01-11',
              children: []
            }
          ]
        },
        {
          id: 'raj006',
          name: 'Deepak Joshi',
          code: 'DEE2024',
          level: 1,
          earnings: 300,
          joinDate: '2024-01-08',
          children: [
            {
              id: 'raj007',
              name: 'Ritu Agarwal',
              code: 'RIT2024',
              level: 2,
              earnings: 100,
              joinDate: '2024-01-15',
              children: []
            }
          ]
        }
      ]
    },
    'pri001': {
      id: 'pri001',
      name: 'Priya Sharma',
      code: 'PRI2024',
      level: 0,
      earnings: 600,
      joinDate: '2024-01-02',
      children: [
        {
          id: 'pri002',
          name: 'Vikash Kumar',
          code: 'VIK2024',
          level: 1,
          earnings: 300,
          joinDate: '2024-01-07',
          children: [
            {
              id: 'pri003',
              name: 'Sunita Devi',
              code: 'SUN2024',
              level: 2,
              earnings: 150,
              joinDate: '2024-01-13',
              children: []
            }
          ]
        },
        {
          id: 'pri004',
          name: 'Manish Gupta',
          code: 'MAN2024',
          level: 1,
          earnings: 250,
          joinDate: '2024-01-09',
          children: []
        }
      ]
    }
  };

  const menuItems = [
    { id: 'overview', icon: BarChart3, label: 'Overview', count: null },
    { id: 'referrals', icon: Users, label: 'Referrals', count: 24 },
    { id: 'chains', icon: GitBranch, label: 'Referral Chains', count: null },
    { id: 'payments', icon: CreditCard, label: 'Payments', count: 8 },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics', count: null },
    { id: 'users', icon: UserPlus, label: 'User Management', count: null },
    { id: 'products', icon: Gift, label: 'Products', count: null },
    { id: 'rewards', icon: DollarSign, label: 'Reward Logic', count: null },
    { id: 'staff', icon: Shield, label: 'Staff Management', count: null },
    { id: 'settings', icon: Settings, label: 'Settings', count: null }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'approved':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'failed':
      case 'declined':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const TreeNode: React.FC<{ node: any; isRoot?: boolean }> = ({ node, isRoot = false }) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const levelColors = [
      'from-blue-500 to-purple-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-purple-500 to-pink-500',
      'from-yellow-500 to-orange-500'
    ];

    return (
      <div className={`${!isRoot ? 'ml-6 border-l-2 border-gray-200 pl-4' : ''}`}>
        <div className="mb-4">
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            {hasChildren && (
              <button
                onClick={() => toggleNode(node.id)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
            )}
            {!hasChildren && <div className="w-7" />}
            
            <div className={`w-12 h-12 bg-gradient-to-r ${levelColors[node.level % levelColors.length]} rounded-full flex items-center justify-center`}>
              <span className="text-white text-sm font-semibold">
                {node.name.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{node.name}</h4>
                  <p className="text-sm text-gray-500">Code: {node.code}</p>
                  <p className="text-xs text-gray-400">Level {node.level} • Joined: {node.joinDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">₹{node.earnings}</p>
                  <p className="text-xs text-gray-500">Earnings</p>
                  {hasChildren && (
                    <p className="text-xs text-blue-600 font-medium">
                      {node.children.length} direct referral{node.children.length !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="space-y-2">
            {node.children.map((child: any) => (
              <TreeNode key={child.id} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+12% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Referrals</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalReferrals.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+18% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Payouts</p>
              <p className="text-2xl font-bold text-gray-900">₹{stats.pendingPayouts.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-600">24 requests pending</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+2.3% from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Referrals</h3>
            <button 
              onClick={() => setActiveSection('referrals')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentReferrals.slice(0, 4).map((referral) => (
              <div key={referral.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-semibold">
                      {referral.referrer.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{referral.referrer}</p>
                    <p className="text-xs text-gray-500">referred {referral.referee}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">₹{referral.amount}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(referral.status)}`}>
                    {referral.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Withdrawal Requests</h3>
            <button 
              onClick={() => setActiveSection('payments')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
            </button>
          </div>
          <div className="space-y-4">
            {withdrawalRequests.slice(0, 4).map((request) => (
              <div key={request.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-semibold">
                      {request.user.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{request.user}</p>
                    <p className="text-xs text-gray-500">{request.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">₹{request.amount}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Referrers */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Referrers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topReferrers.map((user, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.code}</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Referrals:</span>
                  <span className="text-xs font-semibold text-gray-900">{user.referrals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Earnings:</span>
                  <span className="text-xs font-semibold text-green-600">₹{user.earnings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReferralChains = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Referral Chains</h2>
          <p className="text-gray-600">View complete referral trees starting from base users</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search chains..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export All Chains
          </button>
        </div>
      </div>

      {/* Chain Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Base Users</p>
              <p className="text-2xl font-bold text-gray-900">{baseUsers.length}</p>
            </div>
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Chain Referrals</p>
              <p className="text-2xl font-bold text-gray-900">{baseUsers.reduce((sum, user) => sum + user.totalChainReferrals, 0)}</p>
            </div>
            <GitBranch className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Chain Earnings</p>
              <p className="text-2xl font-bold text-gray-900">₹{baseUsers.reduce((sum, user) => sum + user.totalChainEarnings, 0).toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Chain Length</p>
              <p className="text-2xl font-bold text-gray-900">3.2</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {selectedBaseUser ? (
        /* Tree View */
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Referral Chain: {referralChains[selectedBaseUser]?.name}
            </h3>
            <button
              onClick={() => setSelectedBaseUser(null)}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <X className="w-4 h-4 mr-2" />
              Close Tree View
            </button>
          </div>
          <div className="overflow-x-auto">
            <TreeNode node={referralChains[selectedBaseUser]} isRoot={true} />
          </div>
        </div>
      ) : (
        /* Base Users Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {baseUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedBaseUser(user.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <GitBranch className="w-6 h-6 text-gray-400" />
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-1">{user.name}</h4>
              <p className="text-sm text-gray-500 mb-3">Code: {user.code}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Direct Referrals:</span>
                  <span className="font-medium text-gray-900">{user.directReferrals}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Chain Total:</span>
                  <span className="font-medium text-blue-600">{user.totalChainReferrals}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Chain Earnings:</span>
                  <span className="font-medium text-green-600">₹{user.totalChainEarnings}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Joined:</span>
                  <span className="text-gray-500">{user.joinDate}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="w-4 h-4 mr-2" />
                  View Chain Tree
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderReferrals = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Referral Management</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search referrals..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referrer
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referee
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentReferrals.map((referral) => (
                <tr key={referral.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-semibold">
                          {referral.referrer.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{referral.referrer}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">{referral.referee}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-gray-900">₹{referral.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(referral.status)}`}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">{referral.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      {referral.status === 'pending' && (
                        <>
                          <button className="p-1 text-green-600 hover:text-green-800">
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Payment Management</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search payments..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Withdrawals</p>
              <p className="text-2xl font-bold text-orange-600">₹48,500</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Paid Out</p>
              <p className="text-2xl font-bold text-green-600">₹2,85,000</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Failed Payments</p>
              <p className="text-2xl font-bold text-red-600">₹5,200</p>
            </div>
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {withdrawalRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-semibold">
                          {request.user.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{request.user}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-semibold text-gray-900">₹{request.amount.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{request.method}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500">{request.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      {request.status === 'pending' && (
                        <>
                          <button className="p-1 text-green-600 hover:text-green-800">
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'referrals':
        return renderReferrals();
      case 'chains':
        return renderReferralChains();
      case 'payments':
        return renderPayments();
      case 'analytics':
        return <AnalyticsComponent />;
      case 'users':
        return <UserManagementComponent />;
      case 'products':
        return <ProductManagementComponent />;
      case 'rewards':
        return <RewardLogicComponent />;
      case 'staff':
        return <StaffManagementComponent />;
      case 'settings':
        return <div className="text-center py-20 text-gray-500">Settings section coming soon...</div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
            <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                  {item.count && (
                    <span className="ml-auto bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs font-medium">
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col bg-white border-r border-gray-200">
          <div className="flex h-16 items-center px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
                {item.count && (
                  <span className="ml-auto bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs font-medium">
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <button 
              onClick={() => onNavigate('welcome')}
              className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
            >
              <ArrowDownRight className="mr-3 h-5 w-5" />
              Back to User App
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="ml-4 lg:ml-0">
                <h1 className="text-2xl font-bold text-gray-900 capitalize">
                  {activeSection === 'overview' ? 'Dashboard Overview' : activeSection.replace(/([A-Z])/g, ' $1')}
                </h1>
                <p className="text-sm text-gray-500">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="px-4 py-8 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
