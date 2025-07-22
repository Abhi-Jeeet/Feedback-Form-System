import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

const AdminFeedback = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 relative overflow-hidden p-4">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-300 bg-opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 bg-opacity-30 rounded-full filter blur-2xl z-0" />
      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-600 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">Admin: All Feedback</h1>
        {loading ? (
          <div className="text-center text-slate-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <ul className="space-y-4">
            {feedback.map((fb) => (
              <li key={fb._id} className="bg-white/80 backdrop-blur-md shadow rounded-xl p-4 border border-slate-100">
                <div className="font-bold text-indigo-700 text-lg">{fb.name} <span className="text-xs text-slate-400">({fb.email})</span></div>
                <div className="text-slate-700 mb-1">{fb.message}</div>
                {fb.rating && <div className="text-fuchsia-600 font-semibold">Rating: {fb.rating}</div>}
                <div className="text-xs text-slate-400 mt-1">{new Date(fb.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminFeedback; 