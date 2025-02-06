import React, { useEffect, useState } from 'react';
import { UserCard } from '../components/UserCard';
import { Navbar } from '../components/Navbar';
import { UserData } from '../types';
import { Loader2 } from 'lucide-react';

export function UsersPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const randomSeed = Math.random().toString(36).substring(7);
      const response = await fetch(`https://randomuser.me/api/?results=1&seed=${randomSeed}`);
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Random User Profile
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore randomly generated user profiles with detailed information.
              Click "Next User" to discover more profiles.
            </p>
          </div>

          {loading && !userData ? (
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-blue-600">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span>Loading user data...</span>
              </div>
            </div>
          ) : !userData ? (
            <div className="text-center text-red-600">
              Error loading user data. Please try again.
            </div>
          ) : (
            <div className="flex justify-center">
              <UserCard
                userData={userData}
                loading={loading}
                onNext={fetchUser}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}