import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import { MyAnnouncements } from '../artworks_dir';

// interface Announcement {
//   id: number;
//   heading: string;
//   subheading: string;
//   postedOn: string;
// }

// // update font to match navbar
// const MyAnnouncements: Announcement[] = [
//   {
//     id: 1,
//     heading: 'Scheduled Maintenance',
//     subheading: 'We’ll be offline from 10 PM to 12 AM.',
//     postedOn: '2025-06-22',
//   },
//   {
//     id: 2,
//     heading: 'New Feature Released',
//     subheading: 'You can now follow other users and businesses.',
//     postedOn: '2025-06-20',
//   },
//   {
//     id: 3,
//     heading: 'Update to Privacy Policy',
//     subheading: 'We’ve updated how your data is handled.',
//     postedOn: '2025-06-18',
//   },
// ];

const Announcements: React.FC = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'black', fontFamily: 'Comic Neue, cursive', textTransform: 'uppercase' }}>
        Announcements
      </Typography>

      <Stack spacing={2}>
        {MyAnnouncements.map((item) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              p: 2,
              backgroundColor: 'white',
              color: 'black',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              borderRadius: 2,
              border: '1px solid #ddd',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Comic Neue, cursive' }}>
              {item.heading}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Comic Neue, cursive', fontWeight: 300 }}>
              {item.subheading}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Posted on: {new Date(item.postedOn).toLocaleDateString()}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Announcements;
