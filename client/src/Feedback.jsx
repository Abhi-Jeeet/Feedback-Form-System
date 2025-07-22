import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

const Feedback = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', rating: '' });
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
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
      fetchFeedback();
    } catch (err) {
      setError('Failed to submit feedback');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating (1-5)</label>
          <input name="rating" type="number" min="1" max="5" value={form.rating} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        {success && <div className="text-green-600 mt-2">{success}</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-2">Feedback Received</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {feedback.map((fb) => (
              <li key={fb._id} className="bg-white shadow rounded p-4 mb-2">
                <div className="font-bold">{fb.name} ({fb.email})</div>
                <div className="text-gray-700">{fb.message}</div>
                {fb.rating && <div className="text-yellow-600">Rating: {fb.rating}</div>}
                <div className="text-xs text-gray-400">{new Date(fb.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Feedback;