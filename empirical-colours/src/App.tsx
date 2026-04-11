import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import MainPage from './components/MainPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
};

export default App;
