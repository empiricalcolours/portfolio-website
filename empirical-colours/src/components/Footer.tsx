import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 3, mt: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Empirical Colours. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
