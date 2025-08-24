import React from 'react';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Footer from './Footer';
import Announcements from './Annoucements';
import ArtShowcase from './ArtShowcase';
import Contact from './Contact';
import AboutMe from './AboutMe';
import PaintCanvas from './PaintCanvas';
import '../App.css';
import { CssBaseline, Box } from '@mui/material';

const MainPage: React.FC = () => {
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

      {/* Paint layer on top of everything */}
      <PaintCanvas />
    </>
  );
};

export default MainPage;
