import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

const Feedback = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', rating: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post(API_URL, form);
      setSuccess('Feedback submitted!');
      setForm({ name: '', email: '', message: '', rating: '' });
    } catch (err) {
      setError('Failed to submit feedback');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 relative overflow-hidden p-4">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-300 bg-opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 bg-opacity-30 rounded-full filter blur-2xl z-0" />
      <div className="relative z-10 w-full max-w-xl">
        <h1 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-600 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">Feedback Form</h1>
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl px-8 pt-8 pb-6 mb-8 w-full border border-slate-200">
          <div className="mb-4">
            <label className="block text-slate-700 text-sm font-bold mb-2">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/70 shadow-sm transition" />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 text-sm font-bold mb-2">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/70 shadow-sm transition" />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 text-sm font-bold mb-2">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/70 shadow-sm transition" />
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2">Rating (1-5)</label>
            <input name="rating" type="number" min="1" max="5" value={form.rating} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white/70 shadow-sm transition" />
          </div>
          <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-400 to-fuchsia-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ring-offset-white" style={{ boxShadow: '0 0 12px 2px #a5b4fc, 0 2px 8px 0 #818cf8' }}>
            Submit
          </button>
          {success && <div className="text-green-600 mt-2 text-center">{success}</div>}
          {error && <div className="text-red-600 mt-2 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Feedback;