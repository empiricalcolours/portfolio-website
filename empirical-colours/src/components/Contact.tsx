import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from '@mui/material';

const FORM_ENDPOINT = 'https://formspree.io/f/mleqrden'; 

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #66768F 50%, #F9F5F2 50%)',
        p: 2,
        py: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 500,
          borderRadius: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', color: '#000000' }}
        >
          Get in Touch
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Your Name"
            fullWidth
            required
            sx={{ mb: 2 }}
            InputLabelProps={{
              style: { fontFamily: 'Fira Sans, sans-serif', fontWeight: 400, color: '#000000' },
            }}
            InputProps={{
              sx: {
                color: '#000000',
                '& fieldset': {
                  borderColor: '#000000',
                },
                '&:hover fieldset': {
                  borderColor: '#000000', // Keep the same color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000000', // Keep the same color when focused
                },
              },
            }}
          />
          <TextField
            name="email"
            label="Your Email"
            type="email"
            fullWidth
            required
            sx={{ mb: 2 }}
            InputLabelProps={{
              style: { fontFamily: 'Fira Sans, sans-serif', fontWeight: 400, color: '#000000' },
            }}
            InputProps={{
              sx: {
                color: '#000000',
                '& fieldset': {
                  borderColor: '#000000',
                },
                '&:hover fieldset': {
                  borderColor: '#000000', // Keep the same color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000000', // Keep the same color when focused
                },
              },
            }}
          />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ mb: 2 }}
            InputLabelProps={{
              style: { fontFamily: 'Fira Sans, sans-serif', fontWeight: 400, color: '#000000' },
            }}
            InputProps={{
              sx: {
                color: '#000000',
                '& fieldset': {
                  borderColor: '#000000',
                },
                '&:hover fieldset': {
                  borderColor: '#000000', // Keep the same color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#000000', // Keep the same color when focused
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: 1.2, fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', backgroundColor: '#000000', color: '#FFFFFF' }}
          >
            Send Message
          </Button>
        </form>

        {status === 'success' && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Thanks! Your message has been sent.
          </Alert>
        )}
        {status === 'error' && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Something went wrong. Please try again.
          </Alert>
        )}
      </Paper>
    </Box>
  );
};

export default ContactForm;
