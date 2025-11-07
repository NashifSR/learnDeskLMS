'use client';
import React, { useState } from 'react';

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);

  // Placeholder handlers for UI only
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 via-pink-100 to-pink-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-6">Sign Up</h2>

        {!verificationSent ? (
          <form onSubmit={sendOtp} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-purple-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+8801XXXXXXXXX"
                required
                className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-purple-700">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
            >
              Verify OTP
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-purple-700">
          Already have an account?{' '}
          <a href="/login" className="text-pink-600 hover:underline font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
