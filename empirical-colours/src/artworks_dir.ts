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
    heading: 'Art Workshop - Christmas 2025',
    subheading: 'Join me for a special holiday art workshop. Reach out for details and registration.',
    postedOn: '2025-09-22',
  },
  {
    id: 2,
    heading: 'Art Blog Coming Soon!',
    subheading: 'Stay tuned for my upcoming art blog, where I’ll share tips, tutorials, and more.',
    postedOn: '2025-12-20',
  },
];


// modify below to update the artwork images. First of all - upload the image in /public/yourfolder.
// I have used placeholders as a foldername for example, change that to your folder, feel free to create one.
// but all images/ images folders should be in the folder named "public"
// You can add subcategory as well, I have sketching, digital, watercolours here for example. 
export const artworks: Record<string, { src: string; title: string; description: string }[]> = {
  acrylics: [
    { src: '/ruduart/another house.JPG', title: 'Another House', description: 'Acrylic study.' },
    { src: '/ruduart/brick wall.JPG', title: 'Brick Wall', description: 'Textured acrylic work.' },
    { src: '/ruduart/dream house.JPG', title: 'Dream House', description: 'Vibrant architectural piece.' },
    { src: '/ruduart/forest.JPG', title: 'Forest', description: 'Acrylic landscape.' },
    { src: '/ruduart/house in a forest.JPG', title: 'House in a Forest', description: 'Serene forest dwelling.' },
    { src: '/ruduart/house on the rocks.JPG', title: 'House on the Rocks', description: 'Coastal architecture.' },
    { src: '/ruduart/house.JPG', title: 'House', description: 'Simple architectural study.' },
    { src: '/ruduart/i live here.JPG', title: 'I Live Here', description: 'Personal architectural perspective.' },
    { src: '/ruduart/sunset in forest.JPG', title: 'Sunset in Forest', description: 'Golden hour in the woods.' },
  ],
  digital: [
    { src: '/ruduart/Iridescent.jpg', title: 'Iridescent', description: 'Digital light exploration.' },
    { src: '/ruduart/Runaway.jpg', title: 'Runaway', description: 'Dynamic digital composition.' },
    { src: '/ruduart/vexed.jpg', title: 'Vexed', description: 'Digital portrait study.' },
    { src: '/ruduart/idk what this is.JPG', title: 'Mystery Composition', description: 'Abstract digital experiment.' },
    { src: '/ruduart/me in my head.JPG', title: 'Me In My Head', description: 'Introspective digital piece.' },
  ],
  watercolors: [
    { src: '/ruduart/starry starry cat.jpeg', title: 'Starry Starry Cat', description: 'Inspired by Van Gogh.' },
    { src: '/ruduart/sunset somewhere.JPG', title: 'Sunset Somewhere', description: 'Watercolor horizon lines.' },
    { src: '/ruduart/trees by a lake.JPG', title: 'Trees by a Lake', description: 'Calm watercolor reflection.' },
    { src: '/ruduart/random trees.JPG', title: 'Random Trees', description: 'Watercolor nature study.' },
    { src: '/ruduart/walk into the woods.jpg', title: 'Walk Into the Woods', description: 'Watercolor forest path.' },
    { src: '/ruduart/outlining the sunset.jpg', title: 'Outlining the Sunset', description: 'Sketchy watercolor study.' },
  ],
  Charcoal: [
    { src: '/ruduart/pencil sketch.jpeg', title: 'Pencil Sketch', description: 'Graphite portrait study.' },
    { src: '/ruduart/pencil sketch part 2.jpeg', title: 'Pencil Sketch Part 2', description: 'Detailed graphite work.' },
    { src: '/ruduart/The Lawyer.jpg', title: 'The Lawyer', description: 'Character study.' },
    { src: '/ruduart/doggies say hi.JPG', title: 'Doggies Say Hi', description: 'Playful animal sketch.' },
    { src: '/ruduart/doggy says buy.JPG', title: 'Doggy Says Buy', description: 'Whimsical character sketch.' },
    { src: '/ruduart/doggy says hi.JPG', title: 'Doggy Says Hi', description: 'Friendly animal portrait.' },
    { src: '/ruduart/i like cats.jpeg', title: 'I Like Cats', description: 'Graphite cat study.' },
    { src: '/ruduart/me in a forest.jpeg', title: 'Me in a Forest', description: 'Self-portrait in nature.' },
    { src: '/ruduart/my wall.jpeg', title: 'My Wall', description: 'Sketch of a personal space.' },
  ],
};

// this is for the slideshows.
// same as the art showcase, upload the images in "public" folder or a folder inside public folder
// and update the file names below.
export const slideshow_images = [
  '/ruduart/The Lawyer slideshow.jpg',
  '/ruduart/badge.jpeg',
  '/ruduart/outlining the sunset.jpg',
  '/ruduart/walk into the woods.jpg',
  '/ruduart/starry starry cat.jpeg',
  '/ruduart/Runaway.jpg',
  '/ruduart/dream house.JPG',
  '/ruduart/The Lawyer.jpg',
];


