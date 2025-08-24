import React from 'react';
import { Box, Typography, Link, Paper } from '@mui/material';
import { aboutMeData } from '../artworks_dir'; // adjust path if needed

const AboutMe: React.FC = () => {
  const { name, description, email, instagramHandle, instagramUrl } = aboutMeData;

  return (
    <Box
      id="about-me"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66768F',
        p: 2,
        py: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 600,
          width: '100%',
          borderRadius: 3,
          backgroundColor: '#2A3650',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 400, fontFamily: 'Comic Neue, cursive', color: 'white' }}>
          About Me
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300, color: 'white' }}>
          {name}
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300, color: 'white' }}>
          {description}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 300, fontFamily: 'Comic Neue, cursive', color: 'white' }}>
            Email:
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300, color: 'white' }}>
            {email}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 300, fontFamily: 'Comic Neue, cursive', color: 'white' }}>
            Instagram:
          </Typography>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener"
            underline="hover"
            sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300, color: 'white' }}
          >
            {instagramHandle}
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutMe;
