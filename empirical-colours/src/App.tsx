import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import BlogPost from './components/BlogPost';
import './App.css';
import { CssBaseline } from '@mui/material';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
      <SpeedInsights />
    </>
  );
};

export default App;
