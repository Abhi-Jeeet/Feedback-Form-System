import React, { useState } from 'react';
import Feedback from './Feedback';
import Intro from './Intro';
import { AdminFeedback, AdminLogin } from './admin';

const App = () => {
  const [page, setPage] = useState('intro');
  const [adminAuthed, setAdminAuthed] = useState(false);

  const handleLogout = () => {
    setAdminAuthed(false);
    setPage('intro');
  };

  if (page === 'admin') {
    if (!adminAuthed) return <AdminLogin onLogin={() => setAdminAuthed(true)} />;
    return <AdminFeedback onLogout={handleLogout} />;
  }
  if (page === 'feedback') return <Feedback />;
  return <Intro onStart={() => setPage('feedback')} onAdmin={() => setPage('admin')} />;
};

export default App;