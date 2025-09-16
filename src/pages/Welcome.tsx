import React, { useState } from 'react';
import { Phone, ArrowRight, Gift, Users, Coins } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(true);

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setShowOtp(true);
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      setShowReferral(true);
    }
  };

  const handleComplete = () => {
    onNavigate('dashboard');
  };

  if (showRoleSelection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Welcome to RefEarn</h1>
            <p className="text-lg text-gray-600">Please select your role to continue</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onNavigate('admin')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center">
                <Users className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <p className="text-xl font-bold">Admin Dashboard</p>
                  <p className="text-sm opacity-90">Manage users, rewards, and analytics</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6" />
            </button>

            <button
              onClick={() => onNavigate('agent')}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center">
                <Users className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <p className="text-xl font-bold">Agent Dashboard</p>
                  <p className="text-sm opacity-90">Manage referrals and track earnings</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6" />
            </button>

            <button
              onClick={() => setShowRoleSelection(false)}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center">
                <Gift className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <p className="text-xl font-bold">User Registration</p>
                  <p className="text-sm opacity-90">Sign up and start earning</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (showReferral) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Got a Referral Code?</h1>
            <p className="text-lg text-gray-600">Enter the code to get bonus rewards!</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <div className="mb-8">
              <label className="block text-base font-semibold text-gray-700 mb-3">
                Referral Code (Optional)
              </label>
              <input
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                placeholder="Enter referral code"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none text-center text-xl font-mono tracking-widest"
              />
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-5 mb-8">
              <div className="flex items-center text-white">
                <Coins className="w-8 h-8 mr-4" />
                <div>
                  <p className="font-semibold text-lg">Get ₹100 Bonus!</p>
                  <p className="text-base opacity-90">When you use a referral code</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleComplete}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Continue
            </button>

            <button
              onClick={handleComplete}
              className="w-full mt-4 text-gray-500 py-3 font-medium text-base"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showOtp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Verify OTP</h1>
            <p className="text-lg text-gray-600">Enter the 6-digit code sent to</p>
            <p className="font-semibold text-gray-800 text-lg">+91 {mobile}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <div className="mb-8">
              <label className="block text-base font-semibold text-gray-700 mb-3">
                6-digit OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                placeholder="Enter OTP"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none text-center text-2xl font-mono tracking-[1em] leading-normal"
                maxLength={6}
              />
            </div>

            <button
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify OTP
            </button>

            <div className="mt-6 text-center">
              <button className="text-red-500 font-medium">Resend OTP</button>
              <p className="text-gray-500 text-sm mt-2">You can request new OTP in 29 seconds</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Welcome to RefEarn</h1>
          <p className="text-lg text-gray-600">Start earning by referring friends!</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
          <div className="mb-8">
            <label className="block text-base font-semibold text-gray-700 mb-3">
              Mobile Number
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl focus-within:border-red-500">
              <span className="text-gray-500 pl-4">+91</span>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
                placeholder="Enter your number"
                className="flex-1 px-3 py-4 outline-none text-lg"
              />
            </div>
          </div>

          <button
            onClick={handleSendOtp}
            disabled={mobile.length !== 10}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            Continue <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Why choose RefEarn?</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Gift className="w-4 h-4 text-green-600" />
              </div>
              <span>Get ₹100 on signing up</span>
            </li>
            <li className="flex items-center text-gray-600">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <span>Earn ₹50 per referral</span>
            </li>
            <li className="flex items-center text-gray-600">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <Coins className="w-4 h-4 text-purple-600" />
              </div>
              <span>Quick & easy withdrawals</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;