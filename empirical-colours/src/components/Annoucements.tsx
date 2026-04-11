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
    <Box sx={{ backgroundColor: '#2C2C2C', py: 2 }}>
      <Box sx={{ maxWidth: 800, marginRight: 'auto', paddingLeft: '20px' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 400, color: '#F9F5F2', fontFamily: 'Fira Sans, sans-serif' }}>
          ANNOUNCEMENTS
        </Typography>

        <Stack spacing={2}>
          {MyAnnouncements.map((item) => (
            <Paper
            key={item.id}
            elevation={0}
            sx={{
              p: 2,
              backgroundColor: '#2C2C2C',
              color: '#F9F5F2',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              '&:hover': {
                backgroundColor: '#F9F5F2',
                color: '#2C2C2C',
                '* ': { color: '#2C2C2C' }
              },
              borderRadius: 2,
              border: '1px solid #F9F5F2',
            }}
          >
              <Typography variant="subtitle2" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif' }}>
                {item.heading}
              </Typography>
              <Typography variant="caption" sx={{ mb: 1, fontFamily: 'Fira Sans, sans-serif', fontWeight: 400 }}>
                {item.subheading}
              </Typography>
              <Typography variant="overline" sx={{ fontFamily: 'Fira Sans, sans-serif', fontWeight: 400 }}>
                Posted on: {new Date(item.postedOn).toLocaleDateString()}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Announcements;
