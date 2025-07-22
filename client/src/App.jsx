import React, { useState } from 'react';
import Feedback from './Feedback';
import Intro from './Intro';
import { AdminFeedback } from './admin';

const App = () => {
  const [page, setPage] = useState('intro');

  if (page === 'admin') return <AdminFeedback />;
  if (page === 'feedback') return <Feedback />;
  return <Intro onStart={() => setPage('feedback')} onAdmin={() => setPage('admin')} />;
};

export default App;