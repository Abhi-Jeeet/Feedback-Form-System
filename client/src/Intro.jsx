import React from 'react';

const Intro = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 relative overflow-hidden">
      {/* Soft blurred background shape */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400 bg-opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 bg-opacity-30 rounded-full filter blur-2xl z-0" />
      <div className="relative z-10 bg-white/80 shadow-2xl rounded-2xl px-10 py-14 max-w-lg w-full text-center border border-slate-200 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-indigo-600 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
          Feedback Form System
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          A minimal, modern platform to share your thoughts and help us improve. Submit your feedback with ease and see what others have to say.
        </p>
        <ul className="text-slate-500 mb-8 space-y-1 text-base text-left mx-auto max-w-xs">
          <li>• Simple feedback submission</li>
          <li>• Instant feedback display</li>
          <li>• Clean, responsive design</li>
        </ul>
        <button
          onClick={onStart}
          className="px-8 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-400 to-fuchsia-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ring-offset-white drop-shadow-glow"
          style={{ boxShadow: '0 0 16px 2px #a5b4fc, 0 2px 8px 0 #818cf8' }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Intro; 