import React, { useState } from 'react';
import { User, Mail, Lock, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [role, setRole] = useState('public');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-slate-200">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Join the Community</h2>
          <p className="mt-2 text-sm text-slate-600">
            Create an account to preserve and protect your local heritage.
          </p>
        </div>
        
        {/* Role Selection */}
        <div className="flex justify-center gap-2 mb-6">
            {['public', 'community', 'researcher'].map((r) => (
                <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-full border transition-all ${
                        role === r 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'
                    }`}
                >
                    {r}
                </button>
            ))}
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <User className="absolute top-3 left-3 text-slate-400" size={20} />
              <input 
                type="text" 
                required 
                className="appearance-none rounded-none rounded-t-md relative block w-full px-10 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Full Name" 
              />
            </div>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-slate-400" size={20} />
              <input 
                type="email" 
                required 
                className="appearance-none rounded-none relative block w-full px-10 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Email Address" 
              />
            </div>
            <div className="relative">
                <MapPin className="absolute top-3 left-3 text-slate-400" size={20} />
                <input 
                    type="text" 
                    className="appearance-none rounded-none relative block w-full px-10 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Region / District (Optional)" 
                />
            </div>
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-slate-400" size={20} />
              <input 
                type="password" 
                required 
                className="appearance-none rounded-none rounded-b-md relative block w-full px-10 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Password" 
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                Agree to Terms
              </label>
            </div>
          </div>

          <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <CheckCircle className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
            </span>
            Create Account
          </button>
          
          <div className="text-center text-sm text-slate-500">
            Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;