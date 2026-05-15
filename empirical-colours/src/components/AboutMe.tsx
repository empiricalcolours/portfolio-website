import React from 'react';
import { Box, Typography, Link, Paper, Grid } from '@mui/material';
import { aboutMeData } from '../artworks_dir'; // adjust path if needed
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const AboutMe: React.FC = () => {
  const { name, email, instagramHandle, instagramUrl } = aboutMeData;

  return (
    <Box
      id="about-me"
      sx={{
        backgroundColor: 'black',
        color: '#FFF4E2',
        py: { xs: 8, md: 12 },
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '2px solid black',
        transition: 'background-color 0.5s ease, color 0.5s ease',
        '&:hover': {
          backgroundColor: '#F9F5F2',
          color: 'black',
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          color: 'inherit',
          py: { xs: 4, md: 8 },
          px: { xs: 4, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left Side: Photo */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: { xs: '95%', md: '90%' },
                maxWidth: 500,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(255, 244, 226, 0.1)',
                border: '1px solid rgba(255, 244, 226, 0.2)',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  border: '1px solid #FFF4E2',
                }
              }}
            >
              <Box
                component="img"
                src="/placeholders/Rudu.jpg"
                alt="Profile of the Artist"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>

          {/* Right Side: Content */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Mulegh, sans-serif',
                  fontWeight: 400,
                  mb: 2,
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Hi, I'm {name}.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 10, mb: 4, opacity: 0.8 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MdEmail size={20} style={{ marginRight: '12px' }} />
                  <Typography variant="body2" sx={{ fontFamily: 'Fira Sans, sans-serif', fontSize: '1.05rem' }}>
                    {email}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FaInstagram size={20} style={{ marginRight: '12px' }} />
                  <Link
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    sx={{ color: 'inherit', fontFamily: 'Fira Sans, sans-serif', fontSize: '1.05rem' }}
                  >
                    {instagramHandle}
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                fontFamily: 'Fira Sans, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                color: 'inherit',
                opacity: 0.9,
                textAlign: 'justify'
              }}
            >
              <Typography variant="body1" sx={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
                If you’ve somehow landed on this tiny corner of the internet… I already like you. <br/>
                I am an artist who likes to experiment and paint and get distracted and sleep and paint and listen music and eat and read and paint. That sounds absurd for a visitor to read. I will rewrite it some other day, but this is the truth for now.
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
                Also, I’m trying to live a little kinder to the planet, so you’ll spot a bunch of recycled and sustainable art sneaking into my work 🌱
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
                Take your time scrolling through my work. And if you like something or hate it let me know. I’d love to hear your thoughts. If you’re looking to buy something, collaborate, or just say hi, my inbox is always open (seriously, don’t be shy).
              </Typography>

              <Typography variant="body1" sx={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
                And if you’re up for a little extra chaos, head over to my blog. That’s where I share unfiltered thoughts on life, along with behind-the-scenes mess, raw ideas, and some half-baked motivations along with some seditious opinions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutMe;
