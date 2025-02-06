import React from 'react';
import { Phone, User, ArrowRight } from 'lucide-react';
import { UserData } from '../types';

interface UserCardProps {
  userData: UserData;
  loading: boolean;
  onNext: () => void;
}

export function UserCard({ userData, loading, onNext }: UserCardProps) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-8 w-full max-w-2xl backdrop-blur-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 scale-110 group-hover:opacity-30 transition-opacity"></div>
            <img
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
              className="relative w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center space-y-6 flex-1">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {userData.name.first} {userData.name.last}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <User className="h-5 w-5 text-blue-500" />
              <span className="capitalize font-medium">{userData.gender}</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <Phone className="h-5 w-5 text-blue-500" />
              <span className="font-medium">{userData.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
        disabled={loading}
      >
        Next User
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}