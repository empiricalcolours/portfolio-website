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
    { src: '/ruduart/A Long Afternoon.JPG', title: 'A Long Afternoon', description: `Acrylic on Canvas | A4\n(Sold)` },
    { src: '/ruduart/A Place to Breathe.JPG', title: 'A Place to Breathe', description: `Acrylic on Wooden Panel | 18 × 12”\n(Sold)` },
    { src: '/ruduart/Enchantment.JPG', title: 'Enchantment', description: `Acrylic on Canvas | A4\nRs. 7,000 — [Available]` },
    { src: '/ruduart/Golden Sunset.JPG', title: 'Golden Sunset', description: `Acrylic on Canvas | A5\n(Sold)` },
    { src: '/ruduart/Interstellar.JPG', title: 'Interstellar', description: `Acrylic on Canvas | A4\nRs. 10,000 — [Available]` },
    { src: '/ruduart/New York City.JPG', title: 'New York City', description: `Acrylic on Canvas | 36 × 24”\nRs. 50,000 — [Available]` },
    { src: '/ruduart/Runaway.jpg', title: 'Runaway', description: `Acrylic on Canvas | A4\n(Sold)` },
    { src: '/ruduart/Solitude\'s sunset.JPG', title: 'Solitude\'s sunset', description: `Acrylic on Wooden Panel | 22 × 17”\nRs. 25,000 — [Available]` },
    { src: '/ruduart/Standing Quiet.JPG', title: 'Standing Quiet', description: `Acrylic on Canvas | A3\nRs. 10,000 — [Available]` },
    { src: '/ruduart/Starry Starry Cat.JPG', title: 'Starry Starry Cat', description: `Acrylic on Canvas | 12 × 12”\n(Sold)` },
    { src: '/ruduart/The Lawyer.jpg', title: 'The Lawyer', description: `Acrylic on Paper | A3\n(Sold)` },
    { src: '/ruduart/Walk in the Forest.jpeg', title: 'Walk in the Forest', description: `Acrylic on Wooden Panel | 6 × 6”\n(Sold)` },
  ],
  digital: [
    { src: '/digital/The Kettle.jpeg', title: 'The Kettle', description: '' },
    { src: '/digital/Weightless Color.jpg', title: 'Weightless Color', description: '' },
    { src: '/digital/outlining the sunset.jpg', title: 'Outlining The Sunset', description: '' },
    { src: '/digital/vexed.jpg', title: 'Vexed', description: '' },
  ],
  watercolors: [
    { src: '/watercolours/Street Houses.JPG', title: 'Street Houses', description: 'Watercolour on paper | 3 × 4"\nNot for Sale' },
    { src: '/watercolours/A Still Address.JPG', title: 'A Still Address', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Aaji.JPG', title: 'Aaji', description: 'Watercolour on paper | 10 × 10"\nNot for Sale' },
    { src: '/watercolours/Hakuna matata.JPG', title: 'Hakuna matata', description: 'Watercolour on paper | 6 × 6"\nNot for Sale' },
    { src: '/watercolours/Standing in Silence.JPG', title: 'Standing in Silence', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Blue Beetle.jpeg', title: 'Blue Beetle', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Dwelling.JPG', title: 'Dwelling', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Gokhale Hall, Pune.JPG', title: 'Gokhale Hall, Pune', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Sunset.JPG', title: 'Sunset', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Random.JPG', title: 'Random', description: 'Watercolour on paper | 3 × 4"\nNot for Sale' },
    { src: '/watercolours/Pupcorn.JPG', title: 'Pupcorn', description: 'Watercolour on paper | 3 × 4"\nNot for Sale' },
    { src: '/watercolours/The Gardener.JPG', title: 'The Gardener', description: 'Watercolour on paper | 3 × 4"\nNot for Sale' },
    { src: '/watercolours/The Long Way Back.JPG', title: 'The Long Way Back', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Trees from ILS.JPG', title: 'Trees from ILS', description: 'Watercolour on paper | A5\nNot for Sale' },
    { src: '/watercolours/Where the Road Ends.JPG', title: 'Where the Road Ends', description: 'Watercolour on paper | A4\nNot for Sale' },
    { src: '/watercolours/Vadakkumnathan Temple, Thrissur.JPG', title: 'Vadakkumnathan Temple, Thrissur', description: 'Watercolour on paper | 3 × 4"\nNot for Sale' },
  ],
  Charcoal: [],
};

// this is for the slideshows.
// same as the art showcase, upload the images in "public" folder or a folder inside public folder
// and update the file names below.
export const slideshow_images = [
  '/slides/compilation.png',
  '/slides/Ny zoomed.jpeg',
  '/slides/live.png',
];


