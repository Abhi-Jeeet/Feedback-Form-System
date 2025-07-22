import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // For now, use a hardcoded username/password for demo
    if (form.username === 'admin' && form.password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 relative overflow-hidden p-4">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-300 bg-opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 bg-opacity-30 rounded-full filter blur-2xl z-0" />
      <div className="relative z-10 bg-white/80 shadow-2xl rounded-2xl px-10 py-14 max-w-sm w-full text-center border border-slate-200 backdrop-blur-md">
        <h2 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/70 shadow-sm transition"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/70 shadow-sm transition"
            required
          />
          <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-400 to-fuchsia-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">
            Login
          </button>
          {error && <div className="text-red-600 mt-2 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 