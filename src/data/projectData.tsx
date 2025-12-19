export interface Project {
  title: string;
  description: string;
  highlights: string[]; // NEW FIELD (4 bullet points)
  techStack: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "OpenThoughts — User-Generated Content Platform",
    description:
      "OpenThoughts is a community-driven content platform where users can publish poems, short stories, quotes, and personal thoughts in Hindi and English. The platform focuses on a clean reading experience, structured content discovery, and moderation-based publishing using modern frontend architecture.",
    highlights: [
      "Built a fully responsive content platform using Next.js App Router, React, and Tailwind CSS with a strong focus on readability and UX.",
      "Implemented category-based browsing, author pages, pagination, likes, views, and comments for smooth content discovery and engagement.",
      "Integrated Firebase Firestore and Authentication to manage posts, interactions, and an admin approval workflow with real-time updates.",
      "Added SEO-friendly dynamic metadata, sitemap, robots configuration, theme toggle, and production-ready deployment on Vercel.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Firebase (Firestore & Auth)",
      "Tailwind CSS",
      "SEO",
      "Google Search Console",
    ],
    github: "https://github.com/yadav-himanshu/openThoughts",
    link: "https://open-thoughts-pi.vercel.app",
  },

  {
    title: "Bombay Facility Services (BFS)",
    description:
      "A production-ready company website built for a real-world manpower and security services provider. The website presents services, company information, career opportunities, and customer contact flows with a modern, responsive, and interactive UI.",
    highlights: [
      "Developed a multi-page business website including Services, Careers, Gallery, Contact, and Quote pages with conversion-focused layouts.",
      "Implemented interactive forms for contact, quotes, and job applications with validation, file upload support, and user feedback states.",
      "Designed a modern animated UI using reusable components, responsive layouts, and smooth transitions for all screen sizes.",
      "Added frontend enhancements such as dark/light theme toggle, WhatsApp integration, scroll-to-top button, and interactive image gallery.",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "Nodemailer",
    ],
    github: "https://github.com/yadav-himanshu/bfs-security",
    link: "https://bfs-security.vercel.app",
  },

  {
    title: "Recipe Finder App",
    description:
      "A responsive recipe discovery application that allows users to search, explore, and save recipes using a public API. The app focuses on performance, smooth UX, and scalable React architecture suitable for real-world frontend applications.",
    highlights: [
      "Implemented real-time recipe search with debounced input to reduce unnecessary API calls and improve performance.",
      "Built a global favorites system using React Context API with persistent localStorage support.",
      "Designed a responsive UI with skeleton loaders, cuisine filters, and smooth hover interactions for better usability.",
      "Structured the app using reusable components, derived state, and performance optimizations with useMemo.",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Context API",
      "Public REST API",
      "LocalStorage",
    ],
    github: "https://github.com/yadav-himanshu/Recipes-Finder",
    link: "https://recipes-finder-mvec.vercel.app",
  },

  {
    title: "Shop Nest – E-commerce Product Display",
    description:
      "ShopNest is a frontend-focused e-commerce web application that simulates a real online shopping experience. It includes product browsing, filtering, cart management, authentication flow, and checkout UI using Vanilla JavaScript.",
    highlights: [
      "Built a complete shopping flow including product listing, search, filtering, sorting, cart, and checkout using Vanilla JavaScript.",
      "Implemented persistent cart and authentication state using localStorage for seamless user experience across sessions.",
      "Designed a responsive and modern UI with reusable layouts, modal product views, and mobile-friendly navigation.",
      "Structured the project using modular JavaScript architecture to simulate real-world frontend development practices.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage",
      "CSS Grid & Flexbox",
    ],
    github: "https://github.com/yadav-himanshu/ShopNest",
    link: "https://shop-nest-lemon.vercel.app",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A modern personal portfolio website built to showcase frontend development skills, projects, and professional experience. The site emphasizes clean UI, smooth animations, accessibility, and performance.",
    highlights: [
      "Built a component-driven portfolio using Next.js and TypeScript with reusable sections for all major content areas.",
      "Implemented smooth animations and interactions using Framer Motion and Swiper.js without compromising performance.",
      "Designed a custom dark/light theme system using CSS variables with persistent user preferences via localStorage.",
      "Integrated a functional contact form with API handling and Nodemailer, optimized and deployed on Vercel.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "Vercel",
    ],
    github: "https://github.com/yadav-himanshu/Portfolio",
    link: "https://himanshu-portfolio-pink.vercel.app",
  },

  {
    title: "Contact Management App",
    description:
      "A responsive contact management application that allows users to add, update, search, and delete contacts with real-time synchronization using Firebase Firestore.",
    highlights: [
      "Built a real-time contact management system using Firebase Firestore with instant data updates.",
      "Implemented add, edit, delete, and search functionality with a clean and intuitive modal-based UI.",
      "Used Formik and Yup for structured form handling and robust input validation.",
      "Designed reusable UI components and custom hooks to improve scalability and maintainability.",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Firebase Firestore",
      "Formik",
      "Yup",
    ],
    github: "https://github.com/yadav-himanshu/Contact-App",
    link: "https://firebase-contact-app-gold.vercel.app",
  },
];
