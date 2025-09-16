import React from 'react';
import { 
  Users,
  User,
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  BarChart as ChartBar,
  DollarSign
} from 'lucide-react';

interface AgentDashboardProps {
  onNavigate: (screen: string) => void;
}

const AgentDashboard: React.FC<AgentDashboardProps> = ({ onNavigate }) => {

  // Mock data
  const userStats = {
    totalReferrals: 45,
    activeReferrals: 38,
    totalEarnings: 90000,
    pendingPayouts: 12000,
    conversionRate: 84,
    thisMonthEarnings: 15000
  };

  const referralHistory = [
    {
      id: 1,
      name: "Amit Singh",
      date: "2 hours ago",
      amount: 2000,
      status: "completed"
    },
    {
      id: 2,
      name: "Neha Gupta",
      date: "5 hours ago",
      amount: 1500,
      status: "pending"
    },
    {
      id: 3,
      name: "Suresh Patel",
      date: "1 day ago",
      amount: 3000,
      status: "completed"
    }
  ];

  const withdrawalHistory = [
    {
      id: 1,
      amount: 20000,
      method: "Bank Transfer",
      requestedOn: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      amount: 15000,
      method: "UPI",
      requestedOn: "2024-01-10",
      status: "pending"
    },
    {
      id: 3,
      amount: 30000,
      method: "Bank Transfer",
      requestedOn: "2024-01-05",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900">
                Welcome back, Agent
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Here's what's happening with your referrals
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                onClick={() => onNavigate('welcome')}
                className="bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Back to Welcome
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Referrals
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {userStats.totalReferrals}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpRight className="self-center flex-shrink-0 h-4 w-4" />
                        <span className="ml-1">12%</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="font-medium text-gray-900">{userStats.activeReferrals} active</span>
                <span className="text-gray-500"> out of {userStats.totalReferrals}</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Earnings
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        ₹{userStats.totalEarnings}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpRight className="self-center flex-shrink-0 h-4 w-4" />
                        <span className="ml-1">8.2%</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="font-medium text-gray-900">₹{userStats.thisMonthEarnings}</span>
                <span className="text-gray-500"> earned this month</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ChartBar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Conversion Rate
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {userStats.conversionRate}%
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpRight className="self-center flex-shrink-0 h-4 w-4" />
                        <span className="ml-1">3.2%</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="text-gray-500">Based on the last 30 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Withdrawals */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Recent Referrals */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Referrals
              </h3>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {referralHistory.map((referral) => (
                      <li key={referral.id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <User className="h-8 w-8 rounded-full text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {referral.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {referral.date}
                            </p>
                          </div>
                          <div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              referral.status === 'completed' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {referral.status}
                            </span>
                          </div>
                          <div className="flex-shrink-0 text-sm font-medium text-gray-900">
                            ₹{referral.amount}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View all
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Withdrawal History */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Withdrawal History
                </h3>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                >
                  Withdraw Funds
                </button>
              </div>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {withdrawalHistory.map((withdrawal) => (
                      <li key={withdrawal.id} className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <CreditCard className="h-8 w-8 text-gray-400" />
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                ₹{withdrawal.amount}
                              </p>
                              <p className="text-sm text-gray-500">
                                {withdrawal.method}
                              </p>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              withdrawal.status === 'completed' 
                                ? 'bg-green-100 text-green-800'
                                : withdrawal.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {withdrawal.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          Requested on {withdrawal.requestedOn}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View all history
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentDashboard;