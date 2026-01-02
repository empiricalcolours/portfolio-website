import React, { useEffect, useState } from 'react';
import { Box, Fade } from '@mui/material';
import { slideshow_images } from '../artworks_dir'

// const images = [
//   '/placeholders/1.jpg',
//   '/placeholders/2.jpg',
// ];

const Slideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slideshow_images.length);
        setFadeIn(true);
      }, 500); // match Fade timeout
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      height: '70vh',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#fafafa', // Light background for non-matching aspect ratios
      borderRadius: '10px',
    }}>
      <Fade in={fadeIn} timeout={1000}>
        <Box
          component="img"
          src={slideshow_images[current]}
          alt={`slide-${current}`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Fade>
    </Box>
  );
};

export default Slideshow;
