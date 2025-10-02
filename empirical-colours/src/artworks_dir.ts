// modify the below file as required. pay attention to commas and quotes.

// when in doubt or if there's any error. Copy paste everything and ask chatgpt. Paste chatgpt's output back here.
// I trust in chatgpt

// modify below to change content that appears in About Me section
export const aboutMeData = {
  name: 'Rudrani',
  welcomingLine: ` "Hey there, welcome to my little corner of the internet!" `,
  description: `This space is my canvas—literally and figuratively. I started painting as a curious 7-year-old, tagging along with my mom to her art college classes (shoutout to her kind classmates who gave me my first brushstrokes of wisdom). Back then, art was just a sidekick to my childhood, something I picked up occasionally without any grand plans.

Fast forward to junior college: while officially a commerce student, I was unofficially sneaking into Fine Arts classes in the afternoons. That’s where my foundation was laid—messy, unconventional, but very real. And then… I went to law school. Somewhere in the chaos of case laws and courtrooms, I forgot art even existed.

But the lockdown changed everything. With the world standing still, I picked up the paintbrush again—not out of discipline, but out of desperation to fill the void. Since then, sketching and painting have become part of my rhythm. They remind me to slow down, observe, and think differently. For me, art isn’t just about copying what I see—it’s about exploring the details we often overlook in our fast-scrolling, short-attention-span lives.

I don’t like to box myself into one style or medium—it depends on the vibe (yes, very Gen Z of me). Sometimes it’s pencil sketches, sometimes watercolors, sometimes just experimenting with whatever catches my eye.

Oh, and if you’re up for a little more chaos—check out my blog section. That’s where I post my seditious, unfiltered opinions on… well, life? Plus, I occasionally pull back the curtain on the messy background process, raw thoughts, and half-baked motivations that fuel my art.

So yeah, this website is a reflection of me—not polished, not perfect, but always evolving.`,
  email: 'empiricalcolours@gmail.com',
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


