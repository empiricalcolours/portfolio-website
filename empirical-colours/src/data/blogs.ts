export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
  content: string[]; // using array of strings for paragraphs
}

export const blogs: BlogPost[] = [
  {
    id: 'my-first-blog',
    title: 'Welcome to My First Blog Post',
    date: 'April 11, 2026',
    summary: 'This is a brief summary of my first blog post. It gives a quick overview of what to expect.',
    imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800',
    content: [
      'Welcome to my very first blog post! I am thrilled to start this journey and share my thoughts, experiences, and artistic process with you all.',
      'In this space, I will be documenting my continuous exploration of empirical colours, the meaning behind my artworks, and various tutorials and insights into my creative workflow.',
      'Stay tuned for more updates, and feel free to reach out via the contact section if you have any questions or just want to say hi!'
    ]
  }
];
