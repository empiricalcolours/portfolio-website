import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blogs } from '../data/blogs';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when opening a blog
  }, [id]);

  if (!blog) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9F5F2' }}>
        <Navbar />
        <Container maxWidth="md" sx={{ flexGrow: 1, py: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontFamily: 'Mulegh, sans-serif', color: '#2C2C2C' }}>
            Blog Post Not Found
          </Typography>
          <Button
            onClick={() => navigate('/')}
            sx={{ mt: 4, color: '#2C2C2C', borderColor: '#2C2C2C', fontFamily: "'Fira Sans', sans-serif" }}
            variant="outlined"
          >
            Back to Home
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9F5F2' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <IconButton
            onClick={() => navigate('/')}
            sx={{ mb: 4, color: '#2C2C2C', display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <ArrowBackIcon />
            <Typography variant="body1" sx={{ fontFamily: "'Fira Sans', sans-serif" }}>
              Back to Home
            </Typography>
          </IconButton>

          {blog.imageUrl && (
            <Box
              component="img"
              src={blog.imageUrl}
              alt={blog.title}
              sx={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '16px',
                mb: 6,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            />
          )}

          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: 'Mulegh, sans-serif',
              color: '#2C2C2C',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            {blog.title}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "'Fira Sans', sans-serif",
              color: 'text.secondary',
              mb: 6,
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              pb: 2,
            }}
          >
            {blog.date}
          </Typography>

          <Box sx={{ color: '#2C2C2C' }}>
            {blog.content.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                paragraph
                sx={{
                  fontFamily: "'Fira Sans', sans-serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogPost;
