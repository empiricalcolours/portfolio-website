import React from 'react';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import Announcements from './components/Annoucements';
import ArtShowcase from './components/ArtShowcase';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import './App.css';
import { CssBaseline, Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box component="main" id="home" sx={{ flexGrow: 1 }}>
      <Slideshow />
      </Box>
      <Announcements />
      <Box id="art">
      <ArtShowcase />
      </Box>
      <AboutMe />
      <Box id="contact">
      <Contact />
      </Box>
      <Footer />

    </>
  );
};

export default App;
