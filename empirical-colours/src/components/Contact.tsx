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
          maxWidth: 500,
          borderRadius: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 400, fontFamily: 'Comic Neue, cursive' }}
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
              style: { fontFamily: 'Comic Neue, cursive', fontWeight: 300 },
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
              style: { fontFamily: 'Comic Neue, cursive', fontWeight: 300 },
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
              style: { fontFamily: 'Comic Neue, cursive', fontWeight: 300 },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: 1.2, fontWeight: 300, fontFamily: 'Comic Neue, cursive' }}
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
