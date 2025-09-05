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
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter OTP"
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none text-center text-3xl font-mono tracking-widest"
                maxLength={6}
              />
            </div>

            <button
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify & Continue
            </button>

            <button className="w-full mt-4 text-red-500 py-3 font-medium text-base">
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Hero Content */}
        <div className="text-center lg:text-left">
          <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8">
            <Users className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">RefEarn</h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8">Refer friends, earn rewards!</p>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Gift className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800 text-lg">₹50 Sign-up Bonus</p>
                <p className="text-sm text-gray-500">Complete registration</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block space-y-4 text-lg text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span>Earn money by referring friends</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span>Get instant rewards on successful referrals</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span>Withdraw earnings anytime</span>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Join Now</h2>
            
            <div className="mb-8">
              <label className="block text-base font-semibold text-gray-700 mb-3">
                Mobile Number
              </label>
              <div className="flex">
                <div className="bg-gray-100 px-4 py-4 rounded-l-xl border-2 border-r-0 border-gray-200">
                  <span className="text-gray-700 font-semibold">+91</span>
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Enter mobile number"
                  className="flex-1 px-4 py-4 border-2 border-l-0 border-gray-200 rounded-r-xl focus:border-red-500 focus:outline-none text-lg"
                  maxLength={10}
                />
              </div>
            </div>

            <button
              onClick={handleSendOtp}
              disabled={mobile.length !== 10}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <span>Continue</span>
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            {/* Admin Access */}
            <button
              onClick={() => onNavigate('admin')}
              className="w-full mt-4 text-gray-500 py-3 font-medium text-base hover:text-gray-700 transition-colors"
            >
              Admin Access
            </button>
            
            {/* Agent Dashboard */}
            <button
              onClick={() => onNavigate('agent')}
              className="w-full mt-2 text-blue-500 py-3 font-medium text-base hover:text-blue-700 transition-colors"
            >
              Agent Dashboard - Society Management
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;