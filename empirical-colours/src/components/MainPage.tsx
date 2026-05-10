import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Footer from './Footer';
import Announcements from './Annoucements';
import ArtShowcase from './ArtShowcase';
import Contact from './Contact';
import AboutMe from './AboutMe';
import PaintCanvas from './PaintCanvas';
import BlogSection from './BlogSection';
import HowToBuy from './HowToBuy';
import '../App.css';
import { CssBaseline, Box } from '@mui/material';

const MainPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
      <HowToBuy />
      <AboutMe />
      <Box id="blogs">
        <BlogSection />
      </Box>
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
