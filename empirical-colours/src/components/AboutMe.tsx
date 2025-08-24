import React from 'react';
import { Box, Typography, Link, Paper } from '@mui/material';
import { aboutMeData } from '../artworks_dir'; // adjust path if needed

const AboutMe: React.FC = () => {
  const { name, description, email, instagramHandle, instagramUrl } = aboutMeData;

  return (
    <Box
      id="about-me"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 600,
          width: '100%',
          borderRadius: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 400, fontFamily: 'Comic Neue, cursive' }}>
          About Me
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300 }}>
          {name}
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300 }}>
          {description}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 300, fontFamily: 'Comic Neue, cursive' }}>
            Email:
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300 }}>
            {email}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 300, fontFamily: 'Comic Neue, cursive' }}>
            Instagram:
          </Typography>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener"
            underline="hover"
            sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300 }}
          >
            {instagramHandle}
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutMe;
