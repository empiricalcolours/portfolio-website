import React from 'react';
import { Box, Typography, Link, Paper, Grid, Avatar } from '@mui/material';
import { aboutMeData } from '../artworks_dir'; // adjust path if needed
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const AboutMe: React.FC = () => {
  const { name, welcomingLine, description, email, instagramHandle, instagramUrl } = aboutMeData;

    return (
    <Box
      id="about-me"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        p: 2,
        py: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 1200,
          width: '100%',
          borderRadius: 3,
          backgroundColor: 'black',
          border: '1px solid #FFF4E2',
          color: '#FFF4E2',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          '.MuiTypography-root': {
            color: 'inherit',
          },
          '.MuiLink-root': {
            color: '#FFF4E2',
            transition: 'color 0.3s ease',
          },
          '&:hover': {
            backgroundColor: '#FFF4E2',
            color: 'black',
            '.MuiLink-root': {
              color: 'black',
            },
          },
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 400, fontFamily: 'Mulegh, sans-serif', textAlign: 'center' }}>
          About Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <MdEmail size={18} style={{ marginRight: '8px' }} />
              <Typography variant="caption" sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: 300 }}>
                {email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaInstagram size={18} style={{ marginRight: '8px' }} />
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener"
                underline="hover"
                sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: 300, fontSize: '0.75rem' }}
              >
                {instagramHandle}
              </Link>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: -10 }}>
            <Avatar
              alt="A picture of me"
              src="/placeholders/rufus.jpg"
              sx={{
                width: 300,
                height: 300,
                border: '2px solid #FFF4E2',
              }}
            />
          </Grid>
          <Grid item xs={12} md={7} container direction="column" justifyContent="space-between">
            <Grid item>
              <Typography variant="h2" sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: 700 }}>
                {name}
              </Typography>
              <Typography variant="h5" sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: 300 }}>
                {welcomingLine}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 300, mt: 2 }}>
          {description}
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutMe;
