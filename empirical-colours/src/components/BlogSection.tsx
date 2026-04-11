import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#F9F5F2', // Matches the main aesthetic
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Mulegh, sans-serif',
            color: '#2C2C2C',
            mb: 6,
          }}
        >
          Latest Blogs
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  },
                }}
              >
                {blog.imageUrl && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.imageUrl}
                    alt={blog.title}
                    sx={{
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                    }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontFamily: "'Fira Sans', sans-serif" }}
                  >
                    {blog.date}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontFamily: 'Mulegh, sans-serif', color: '#2C2C2C' }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ fontFamily: "'Fira Sans', sans-serif" }}
                  >
                    {blog.summary}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/blog/${blog.id}`)}
                    sx={{
                      mt: 'auto',
                      borderColor: '#2C2C2C',
                      color: '#2C2C2C',
                      fontFamily: "'Fira Sans', sans-serif",
                      textTransform: 'none',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#2C2C2C',
                        color: '#F9F5F2',
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
