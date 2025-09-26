export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Bombay Facility Services (BFS)",
    description:
      "A fully responsive company website showcasing services and contact options with interactive UI.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Nodemailer"],
    github: "https://github.com/yadav-himanshu/BFS",
    link: "https://bfs-zeta.vercel.app",
  },
  {
    title: "Recipe Finder App",
    description:
      "Responsive app enabling users to search for recipes, fetch data from an external API, and redirect to YouTube tutorials.",
    techStack: ["React.js", "Tailwind CSS", "API Integration"],
    github: "https://github.com/yadav-himanshu/Recipes-Finder",
    link: "https://recipes-finder-mvec.vercel.app",
  },
  {
    title: "Shop Nest – E-commerce Product Display",
    description:
      "Interactive product display app with account authentication, fetching data from external API, and optimized layout for all devices.",
    techStack: ["HTML5", "CSS3", "JavaScript", "CSS Grid/Flexbox"],
    github: "https://github.com/yadav-himanshu/ShopNest",
    link: "https://shop-nest-lemon.vercel.app",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern, interactive portfolio website to showcase projects, skills, and professional experience. Includes smooth animations, responsive design, and a contact form with Nodemailer integration.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer", "Express.js", "Vercel"],
    github: "https://github.com/yadav-himanshu/Portfolio",
    link: "https://your-portfolio.vercel.app",
  },
  {
    title: "Contact Management App",
    description:
      "Dynamic contact management system allowing users to add, update, and delete contacts efficiently. Real-time synchronization ensures instant updates across the app.",
    techStack: ["React.js", "Tailwind CSS", "Firebase (Realtime Database)", "JavaScript"],
    github: "https://github.com/yadav-himanshu/Contact-App",
    link: "https://contact-app-demo.vercel.app",
  },
];
