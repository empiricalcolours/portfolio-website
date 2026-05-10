import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import TermsAndConditionsModal from './TermsAndConditionsModal';

const sections = [
  {
    title: '🛒 How to buy',
    content: (
      <>
        <Box component="ul" sx={{ pl: 3, mb: 2, fontFamily: 'Fira Sans, sans-serif' }}>
          <li>Go to the My Art Section</li>
          <li>Check prices + availability</li>
          <li>Hit me up via contact form or email</li>
        </Box>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: 600, mt: 2 }}>
          If something’s sold out but you’re obsessed?
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', opacity: 0.9 }}>
          → Ask. We can figure something out.
        </Typography>
      </>
    ),
  },
  {
    title: '🎯 Custom artwork',
    content: (
      <>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mb: 1 }}>
          Want something made just for you? Slide in with:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2, fontFamily: 'Fira Sans, sans-serif' }}>
          <li>Theme</li>
          <li>Budget</li>
          <li>Concept</li>
          <li>Medium</li>
        </Box>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', opacity: 0.9 }}>
          I love experimenting… but also fair warning:<br />
          Sometimes I will say no if it’s not my vibe.
        </Typography>
      </>
    ),
  },
  {
    title: '💳 Payments',
    content: (
      <>
        <Box component="ul" sx={{ pl: 3, mb: 2, fontFamily: 'Fira Sans, sans-serif' }}>
          <li>You email → I reply → we agree</li>
          <li>You pay via bank transfer/UPI</li>
          <li>Share the payment details</li>
          <li>I ship artwork + invoice + certificate of authenticity</li>
        </Box>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mt: 2, opacity: 0.9 }}>
          Yes, I do everything myself.<br />
          Artist + admin + CEO + customer support = me<br />
          So pls:<br />
          ✨ Be patient<br />
          ✨ Mention urgency upfront if needed
        </Typography>
      </>
    ),
  },
  {
    title: '🖼️ Framing',
    content: (
      <>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mb: 2 }}>
          All artworks you see here are styled with frames just for display. What you’ll actually receive → <strong>unframed artwork only</strong>.
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mb: 2 }}>
          If you do want it framed, that’s totally possible. Just let me know while ordering.
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', opacity: 0.9 }}>
          <em>Heads up:</em> Framing = extra cost, depending on size, style, and materials.
        </Typography>
      </>
    ),
  },
  {
    title: '⏳ Response time',
    content: (
      <>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mb: 1 }}>
          Minimum 24 hrs.<br />
          Longer if I’m travelling or touching grass.
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mt: 2, fontStyle: 'italic', opacity: 0.9 }}>
          Art isn’t a 10-minute delivery category.
        </Typography>
      </>
    ),
  },
  {
    title: '🔄 Return policy',
    content: (
      <>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mb: 1 }}>
          You can return stuff, but:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2, fontFamily: 'Fira Sans, sans-serif' }}>
          <li>You pay shipping</li>
          <li>Within 7 days only</li>
          <li>Don’t damage it yourself and then blame life</li>
        </Box>
        <Typography variant="body1" sx={{ fontFamily: 'Fira Sans, sans-serif', mt: 2, opacity: 0.9 }}>
          If it gets damaged accidentally and you want it fixed:<br />
          → Send it back, I’ll repair it (might charge a bit 👀)
        </Typography>
      </>
    ),
  },
];

const HowToBuy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      id="how-to-buy"
      sx={{
        backgroundColor: '#F9F5F2',
        py: { xs: 8, md: 12 },
        px: { xs: 4, md: 10 },
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontFamily: 'Mulegh, sans-serif',
          fontWeight: 400,
          mb: 6,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          color: 'black',
        }}
      >
        Purchasing Guide
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sections.map((section, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontFamily: 'Fira Sans, sans-serif',
                  fontWeight: 600,
                  color: 'black',
                  mb: 3,
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ color: 'black', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {section.content}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Typography
        variant="body1"
        align="center"
        sx={{
          fontFamily: 'Fira Sans, sans-serif',
          mt: 6,
          color: 'black',
          opacity: 0.8,
          fontStyle: 'italic',
        }}
      >
        Please read the{' '}
        <Box
          component="span"
          onClick={() => setIsModalOpen(true)}
          sx={{
            cursor: 'pointer',
            textDecoration: 'underline',
            fontWeight: 600,
            '&:hover': {
              color: 'rgba(0,0,0,0.6)',
            },
          }}
        >
          terms and conditions
        </Box>{' '}
        here.
      </Typography>

      <TermsAndConditionsModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </Box>
  );
};

export default HowToBuy;
