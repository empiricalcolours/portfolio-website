import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Box, Fade } from '@mui/material';
import { slideshow_images } from '../artworks_dir';

const Slideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slideshow_images.length);
        setFadeIn(true);
      }, 500); // match Fade timeout
    }, 6000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);


  return (
    <Box sx={{
      position: 'relative',
      height: { xs: '40vh', sm: '50vh', md: '70vh' },
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#fafafa', // Light background for non-matching aspect ratios
      borderRadius: '10px',
      '&:hover .slide-controls': {
        opacity: 1,
      }
    }}>
      <Fade in={fadeIn} timeout={500}>
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
            objectFit: 'cover',
          }}
        />
      </Fade>


    </Box>
  );
};

export default Slideshow;
