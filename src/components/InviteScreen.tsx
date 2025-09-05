import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Send, Instagram, Copy, Check, Users, Gift } from 'lucide-react';

interface InviteScreenProps {
  onNavigate: (screen: string) => void;
}

const InviteScreen: React.FC<InviteScreenProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  
  const referralMessage = `🎉 Join me on RefEarn and start earning money by referring friends! 

Use my referral code: RAJ2024

💰 You get ₹100 signup bonus
💰 I get ₹100 when you join
💰 Earn ₹50 for each friend you refer

Download now: https://refearn.app/ref/RAJ2024`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareToWhatsApp = () => {
    const encodedMessage = encodeURIComponent(referralMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  const shareToTelegram = () => {
    const encodedMessage = encodeURIComponent(referralMessage);
    window.open(`https://t.me/share/url?text=${encodedMessage}`, '_blank');
  };

  const shareToInstagram = () => {
    handleCopy();
    alert('Message copied! You can paste it in your Instagram story or DM.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                className="flex items-center px-3 py-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('invite')}
                className="flex items-center px-3 py-2 text-red-500 border-b-2 border-red-500 font-medium"
              >
                <Send className="w-5 h-5 mr-2" />
                Invite
              </button>
              <button 
                onClick={() => onNavigate('rewards')}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                <Gift className="w-5 h-5 mr-2" />
                Rewards
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Invite Friends & Earn</h1>
          <p className="text-lg text-gray-600">Share your referral code and earn rewards for every successful referral</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Your Referral Code</h3>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-4">
                <p className="text-center text-3xl font-mono font-bold tracking-wider">RAJ2024</p>
              </div>
              <button 
                onClick={handleCopy}
                className="w-full bg-white text-red-500 py-3 rounded-xl font-semibold flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Message</h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">{referralMessage}</p>
              </div>
              <button 
                onClick={handleCopy}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'Message Copied!' : 'Copy Message'}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Share Options</h3>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={shareToWhatsApp}
                  className="flex items-center justify-center bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Share on WhatsApp
                </button>
                
                <button
                  onClick={shareToTelegram}
                  className="flex items-center justify-center bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Share on Telegram
                </button>
                
                <button
                  onClick={shareToInstagram}
                  className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <Instagram className="w-6 h-6 mr-3" />
                  Share on Instagram
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Referral Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-2xl font-bold text-blue-600">15</p>
                  <p className="text-sm text-gray-600">Total Invites</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-sm text-gray-600">Successful</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <p className="text-2xl font-bold text-orange-600">80%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <p className="text-2xl font-bold text-purple-600">₹1,800</p>
                  <p className="text-sm text-gray-600">Total Earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteScreen;
