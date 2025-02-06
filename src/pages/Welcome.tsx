import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-block p-4 bg-blue-500/10 rounded-2xl mb-4">
            <Users size={48} className="text-blue-600" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Random User Explorer
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover and explore randomly generated user profiles with our beautiful and intuitive interface.
          </p>

          <button
            onClick={() => navigate('/users')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View Users
            <Users size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}