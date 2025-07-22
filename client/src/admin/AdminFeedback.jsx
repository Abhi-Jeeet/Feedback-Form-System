import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

const AdminFeedback = ({ onLogout }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setFeedback(res.data);
    } catch (err) {
      setError('Failed to load feedback');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 relative overflow-x-hidden p-0">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-300 bg-opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 bg-opacity-30 rounded-full filter blur-2xl z-0" />
      <div className="relative z-10 w-full px-2 md:px-8">
        <div className="flex justify-end items-center w-full max-w-[1800px] mx-auto mt-4 mb-2">
          <button
            onClick={onLogout}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-400 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ring-offset-white"
          >
            Logout
          </button>
        </div>
        <h1 className="text-3xl font-extrabold mb-8 mt-4 text-center bg-gradient-to-r from-indigo-600 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">Admin: All Feedback</h1>
        {loading ? (
          <div className="text-center text-slate-500 py-8">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : feedback.length === 0 ? (
          <div className="text-center text-slate-400 py-8">No feedback found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-[1800px] mx-auto pb-16">
            {feedback.map((fb) => (
              <div key={fb._id} className="flex flex-col bg-white/90 rounded-xl shadow-lg border border-slate-100 p-5 hover:shadow-2xl transition min-w-0">
                <div className="flex items-center mb-2">
                  <div className="font-bold text-indigo-700 text-lg truncate">{fb.name}</div>
                  <span className="ml-2 text-xs text-slate-400 truncate">({fb.email})</span>
                </div>
                <div className="text-slate-700 mb-2 line-clamp-3" title={fb.message}>{fb.message}</div>
                {fb.rating && <div className="text-fuchsia-600 font-semibold mb-1">Rating: {fb.rating}</div>}
                <div className="text-xs text-slate-400 mt-auto text-right">{new Date(fb.createdAt).toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminFeedback; 