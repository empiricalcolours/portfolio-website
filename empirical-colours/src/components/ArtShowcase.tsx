import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {artworks} from '../artworks_dir'
// const artworks: Record<string, { src: string; title: string; description: string }[]> = {
//   sketching: [
//     { src: '/placeholders/1.jpg', title: 'Graphite Gaze', description: 'A hand-drawn portrait in pencil.' },
//     { src: '/placeholders/2.jpg', title: 'Abstract Lines', description: 'Minimalist sketch of geometry.' },
//     { src: '/placeholders/3.jpg', title: 'Graphite Gaze', description: 'A hand-drawn portrait in pencil.' },
//     { src: '/placeholders/4.jpg', title: 'Abstract Lines', description: 'Minimalist sketch of geometry.' },
//     { src: '/placeholders/5.jpg', title: 'Graphite Gaze', description: 'A hand-drawn portrait in pencil.' },
//     { src: '/placeholders/6.jpg', title: 'Abstract Lines', description: 'Minimalist sketch of geometry.' },
//     { src: '/placeholders/7.jpg', title: 'Graphite Gaze', description: 'A hand-drawn portrait in pencil.' },
//     { src: '/placeholders/8.jpg', title: 'Abstract Lines', description: 'Minimalist sketch of geometry.' },
//   ],
//   digital: [
//     { src: '/placeholders/1.jpg', title: 'Futuristic City', description: 'A neon-lit cityscape.' },
//     { src: '/placeholders/2.jpg', title: 'Cyber Portrait', description: 'A character in sci-fi setting.' },
//   ],
//   watercolors: [
//     { src: '/placeholders/1.jpg', title: 'Ocean Breeze', description: 'Soft strokes of a seascape.' },
//     { src: '/placeholders/2.jpg', title: 'Autumn Leaves', description: 'Watercolor impression of fall.' },
//   ],
// };

const ArtShowcase: React.FC = () => {
  const genres = Object.keys(artworks);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentImages = artworks[genres[selectedGenre]];

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + currentImages.length - 1) % currentImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % currentImages.length);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Tabs
        value={selectedGenre}
        onChange={(_, newValue) => setSelectedGenre(newValue)}
        textColor="inherit"
        indicatorColor="primary"
        variant="scrollable"
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre.charAt(0).toUpperCase() + genre.slice(1)} sx={{ fontFamily: 'Comic Neue, cursive', fontWeight: 400, textTransform: 'uppercase' }} />
        ))}
      </Tabs>

      <ImageList variant="masonry" cols={isMobile ? 1 : 4} gap={16} sx={{ mt: 2 }}>
        {currentImages.map((item, index) => (
          <ImageListItem key={item.src} onClick={() => handleOpen(index)} sx={{ cursor: 'pointer' }}>
            <img src={item.src} alt={item.title} loading="lazy" style={{ width: '100%', borderRadius: 8 }} />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
              position="below"
              sx={{ textAlign: 'center' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {selectedIndex !== null && (
          <DialogContent sx={{ position: 'relative', p: 2 }}>
            <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
              <CloseIcon />
            </IconButton>
            <Box
              display="flex"
              flexDirection={isMobile ? 'column' : 'row'}
              alignItems="center"
              justifyContent="center"
              gap={4}
            >
              <IconButton onClick={handlePrev}>
                <ArrowBackIosNewIcon />
              </IconButton>

              <Box
                component="img"
                src={currentImages[selectedIndex].src}
                alt={currentImages[selectedIndex].title}
                sx={{
                  maxHeight: 400,
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: 2,
                }}
              />

              <IconButton onClick={handleNext}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            <Box mt={2} textAlign="center">
              <Typography variant="h6">{currentImages[selectedIndex].title}</Typography>
              <Typography variant="body2">{currentImages[selectedIndex].description}</Typography>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default ArtShowcase;
