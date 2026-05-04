import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Box, Fade, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideshow_images.length);
      setFadeIn(true);
      startTimer(); // reset timer
    }, 500);
  };

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slideshow_images.length - 1 : prev - 1));
      setFadeIn(true);
      startTimer(); // reset timer
    }, 500);
  };

  return (
    <Box sx={{
      position: 'relative',
      height: '70vh',
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

      {/* Manual Controls */}
      <Box
        className="slide-controls"
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
          transform: 'translateY(-50%)',
          opacity: 0, // hide by default, show on hover
          transition: 'opacity 0.3s ease',
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' } }}
        >
          <ArrowBackIosIcon sx={{ ml: 0.5 }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' } }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Slideshow;
