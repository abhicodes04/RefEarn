import { useState } from 'react';
import WelcomeScreen from './pages/Welcome';
import DashboardScreen from './pages/Dashboard';
import InviteScreen from './pages/Invite';
import RewardsScreen from './pages/Rewards';
import AdminDashboard from './pages/admin/Dashboard';
import AgentDashboard from './pages/agent/Dashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('welcome');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardScreen onNavigate={handleNavigate} />;
      case 'invite':
        return <InviteScreen onNavigate={handleNavigate} />;
      case 'rewards':
        return <RewardsScreen onNavigate={handleNavigate} />;
      case 'admin':
        return <AdminDashboard onNavigate={handleNavigate} />;
      case 'agent':
        return <AgentDashboard onNavigate={handleNavigate} />;
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-['Poppins'] antialiased min-h-screen bg-gray-50">
      {renderScreen()}
    </div>
  );
}

export default App;