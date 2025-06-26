import React from 'react';
import { Box, Typography, Link, Paper } from '@mui/material';
import { aboutMeData } from '../artworks_dir'; // adjust path if needed

const AboutMe: React.FC = () => {
  const { name, description, email, instagramHandle, instagramUrl } = aboutMeData;

  return (
    <Box
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
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          About Me
        </Typography>

        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            Email:
          </Typography>
          <Typography variant="body2" gutterBottom>
            {email}
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            Instagram:
          </Typography>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            {instagramHandle}
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutMe;
