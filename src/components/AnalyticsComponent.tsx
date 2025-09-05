import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const AnalyticsComponent: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('referrals');

  const analyticsData = {
    overview: {
      totalUsers: { value: 1250, change: 12.5, trend: 'up' },
      activeUsers: { value: 890, change: 8.2, trend: 'up' },
      conversionRate: { value: 65.4, change: -2.1, trend: 'down' },
      avgRevenue: { value: 2450, change: 15.8, trend: 'up' }
    },
    referralMetrics: {
      totalReferrals: 3420,
      successfulReferrals: 2235,
      pendingReferrals: 485,
      failedReferrals: 700,
      averageReferralsPerUser: 2.74
    },
    revenueMetrics: {
      totalRevenue: 485000,
      referralRevenue: 342000,
      bonusPayouts: 143000,
      averageRevenuePerUser: 388
    },
    topReferrers: [
      { name: 'Rajesh Kumar', referrals: 45, revenue: 4500, conversionRate: 82 },
      { name: 'Priya Sharma', referrals: 38, revenue: 3800, conversionRate: 75 },
      { name: 'Rohit Verma', referrals: 32, revenue: 3200, conversionRate: 68 },
      { name: 'Anita Das', referrals: 28, revenue: 2800, conversionRate: 71 }
    ]
  };

  const chartData = [
    { date: '2024-01-01', referrals: 45, revenue: 4500 },
    { date: '2024-01-02', referrals: 52, revenue: 5200 },
    { date: '2024-01-03', referrals: 38, revenue: 3800 },
    { date: '2024-01-04', referrals: 65, revenue: 6500 },
    { date: '2024-01-05', referrals: 48, revenue: 4800 },
    { date: '2024-01-06', referrals: 71, revenue: 7100 },
    { date: '2024-01-07', referrals: 55, revenue: 5500 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
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

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(analyticsData.overview).map(([key, data]) => (
          <div key={key} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                {key === 'totalUsers' && <Users className="w-6 h-6 text-blue-600" />}
                {key === 'activeUsers' && <Activity className="w-6 h-6 text-green-600" />}
                {key === 'conversionRate' && <Target className="w-6 h-6 text-purple-600" />}
                {key === 'avgRevenue' && <DollarSign className="w-6 h-6 text-orange-600" />}
              </div>
              <div className={`flex items-center ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {data.trend === 'up' ? 
                  <ArrowUpRight className="w-4 h-4 mr-1" /> : 
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                }
                <span className="text-sm font-medium">{Math.abs(data.change)}%</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {key === 'avgRevenue' ? `₹${data.value.toLocaleString()}` : 
                 key === 'conversionRate' ? `${data.value}%` : 
                 data.value.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Referral Trends Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Referral Trends</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedMetric('referrals')}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  selectedMetric === 'referrals' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Referrals
              </button>
              <button
                onClick={() => setSelectedMetric('revenue')}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  selectedMetric === 'revenue' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Revenue
              </button>
            </div>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex items-center">
                <div className="w-20 text-sm text-gray-600">
                  {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{
                        width: `${selectedMetric === 'referrals' 
                          ? (data.referrals / 80) * 100 
                          : (data.revenue / 8000) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-sm font-medium text-gray-900">
                  {selectedMetric === 'referrals' ? data.referrals : `₹${data.revenue}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Conversion Funnel</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Total Invites Sent</p>
                <p className="text-sm text-gray-600">Friends invited via referral code</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">5,240</p>
                <p className="text-sm text-gray-500">100%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">App Downloads</p>
                <p className="text-sm text-gray-600">Friends who downloaded app</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">3,420</p>
                <p className="text-sm text-gray-500">65.3%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Completed Signup</p>
                <p className="text-sm text-gray-600">Friends who completed registration</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">2,235</p>
                <p className="text-sm text-gray-500">42.7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Referrers */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Referrers</h3>
          <div className="space-y-4">
            {analyticsData.topReferrers.map((referrer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-semibold">
                      {referrer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{referrer.name}</p>
                    <p className="text-sm text-gray-500">{referrer.referrals} referrals</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{referrer.revenue.toLocaleString()}</p>
                  <p className="text-sm text-green-600">{referrer.conversionRate}% conversion</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Successful Referrals</span>
                <span className="text-sm font-semibold text-gray-900">
                  {((analyticsData.referralMetrics.successfulReferrals / analyticsData.referralMetrics.totalReferrals) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: `${(analyticsData.referralMetrics.successfulReferrals / analyticsData.referralMetrics.totalReferrals) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Pending Referrals</span>
                <span className="text-sm font-semibold text-gray-900">
                  {((analyticsData.referralMetrics.pendingReferrals / analyticsData.referralMetrics.totalReferrals) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{
                    width: `${(analyticsData.referralMetrics.pendingReferrals / analyticsData.referralMetrics.totalReferrals) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Failed Referrals</span>
                <span className="text-sm font-semibold text-gray-900">
                  {((analyticsData.referralMetrics.failedReferrals / analyticsData.referralMetrics.totalReferrals) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{
                    width: `${(analyticsData.referralMetrics.failedReferrals / analyticsData.referralMetrics.totalReferrals) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg. Referrals per User</span>
              <span className="text-sm font-semibold text-gray-900">
                {analyticsData.referralMetrics.averageReferralsPerUser}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg. Revenue per User</span>
              <span className="text-sm font-semibold text-gray-900">
                ₹{analyticsData.revenueMetrics.averageRevenuePerUser}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
