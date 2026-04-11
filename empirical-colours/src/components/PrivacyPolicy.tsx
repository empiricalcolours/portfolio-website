import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 800,
          borderRadius: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif' }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: 400 }}>
          This is a placeholder for the Privacy Policy.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PrivacyPolicy;
