// modify the below file as required. pay attention to commas and quotes.

// when in doubt or if there's any error. Copy paste everything and ask chatgpt. Paste chatgpt's output back here.
// I trust in chatgpt

// modify below to change content that appears in About Me section
export const aboutMeData = {
  name: 'Rudrani Warad',
  description: "and I'm stupid.",
  email: 'johndoe@example.com',
  instagramHandle: '@empiricalcolours',
  instagramUrl: 'https://instagram.com/empiricalcolours',
};

interface Announcement {
  id: number;
  heading: string;
  subheading: string;
  postedOn: string;
}
// Modify below to update annoucements. Also add random number as id
export const MyAnnouncements: Announcement[] = [
  {
    id: 1,
    heading: 'Scheduled Maintenance',
    subheading: 'We’ll be offline from 10 PM to 12 AM.',
    postedOn: '2025-06-22',
  },
  {
    id: 2,
    heading: 'New Feature Released',
    subheading: 'You can now follow other users and businesses.',
    postedOn: '2025-06-20',
  },
  {
    id: 3,
    heading: 'Update to Privacy Policy',
    subheading: 'We’ve updated how your data is handled.',
    postedOn: '2025-06-18',
  },
];


// modify below to update the artwork images. First of all - upload the image in /public/yourfolder.
// I have used placeholders as a foldername for example, change that to your folder, feel free to create one.
// but all images/ images folders should be in the folder named "public"
// You can add subcategory as well, I have sketching, digital, watercolours here for example. 
export const artworks: Record<string, { src: string; title: string; description: string }[]> = {
  acrylics: [
    { 
      src: '/placeholders/1.jpg', 
      title: 'Graphite Gaze', 
      description: 'A hand-drawn portrait in pencil.' 
    },
     { 
      src: '/placeholders/a.jpg', 
      title: 'Golden Sunset', 
      description: 'Acrylics on Canvas.' 
    },
    { 
      src: '/placeholders/2.jpg', 
      title: 'Abstract Lines', 
      description: 'Minimalist sketch of geometry.' },
  ],
  digital: [
    { 
      src: '/placeholders/1.jpg', 
      title: 'Futuristic City', 
      description: 'A neon-lit cityscape.' 
    },
    { 
      src: '/placeholders/2.jpg', 
      title: 'Cyber Portrait', 
      description: 'A character in sci-fi setting.' 
    },
  ],
  watercolors: [
    { 
      src: '/placeholders/b.jpg', 
      title: 'Cat in a starry night', 
      description: 'Inspired by Van Gogh.' 
    },
    { 
      src: '/placeholders/c.jpg', 
      title: 'Autumn Leaves', 
      description: 'Watercolor impression of fall.' 
    },
  ],
  Charcoal: [
    { 
      src: '/placeholders/b.jpg', 
      title: 'Cat in a starry night', 
      description: 'Inspired by Van Gogh.' 
    },
    { 
      src: '/placeholders/c.jpg', 
      title: 'Autumn Leaves', 
      description: 'Watercolor impression of fall.' 
    },
  ],
};

// this is for the slideshows.
// same as the art showcase, upload the images in "public" folder or a folder inside public folder
// and update the file names below.
export const slideshow_images = [
  '/placeholders/a.jpg',
  '/placeholders/b.jpg',
  '/placeholders/1.jpg',
  '/placeholders/2.jpg',
];


