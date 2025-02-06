import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 font-semibold text-lg"
            >
              <Users className="h-6 w-6" />
              <span>Random User Explorer</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/users"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/users'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}