
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Mail, Shield, Settings, BarChart3, Zap } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
    { title: "Email Verification", url: "/email-verification", icon: Mail },
    { title: "Email Rectification", url: "/email-rectification", icon: Zap },
    { title: "Domain Config", url: "/domain-config", icon: Shield },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold">I</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InboxAI</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => navigate(item.url)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  location.pathname === item.url
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/20 dark:text-blue-400'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200"
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => navigate(item.url)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.url
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/20 dark:text-blue-400'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
