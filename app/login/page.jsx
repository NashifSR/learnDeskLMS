'use client';
import React, { useState } from 'react';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);

  // Placeholder handlers
  const sendOtp = (e) => {
    e.preventDefault();
    setVerificationSent(true);
    alert('OTP sent! (UI only)');
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    alert('OTP verified! (UI only)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-emerald-900 text-center mb-6">Sign In with Phone</h2>

        {!verificationSent ? (
          <form onSubmit={sendOtp} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-emerald-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+8801XXXXXXXXX"
                required
                className="mt-1 block w-full px-4 py-2 border border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 text-white font-semibold rounded-lg shadow hover:bg-emerald-700 transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-emerald-700">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 text-white font-semibold rounded-lg shadow hover:bg-emerald-700 transition"
            >
              Verify OTP
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-emerald-700">
          Don't have an account?{' '}
          <a href="/login/signUp" className="text-emerald-600 hover:underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
