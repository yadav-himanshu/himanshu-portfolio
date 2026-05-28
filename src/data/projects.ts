export interface Project {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  type: "dev" | "wordpress";
  link?: string;
  github?: string;
  // WordPress-specific extras
  category?: string; // e.g. "E-Commerce", "Business", "Real Estate"
  previewTag?: string; // e.g. "WooCommerce", "Elementor", "Custom Theme"
}



export const projects: Project[] = [
  {
    slug: "axovia-tech",
    title: "Axovia Tech | Premium Web Engineering Showcase",
    description:
      "Axovia Tech is a modern portfolio and landing platform designed for showcasing premium web engineering, interactive UI systems, and modern frontend development experiences.",
    highlights: [
      "Built a responsive agency showcase using Next.js, TypeScript, Tailwind CSS, and Framer Motion with premium UI interactions.",
      "Implemented reusable project showcase systems, smooth animations, dark mode support, and scalable component architecture.",
      "Integrated dynamic contact workflows with Nodemailer, validation handling, and direct communication integrations.",
      "Optimized performance, SEO structure, accessibility, and responsive layouts for production-ready deployment.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "SEO",
    ],
    type: "dev",
    link: "https://axovia-tech.vercel.app",
  },
  {
    slug: "lumaframe-studio",
    title: "LumaFrame Studio | Cinematic Photography Portfolio",
    description:
      "LumaFrame Studio is a premium photography portfolio website focused on cinematic storytelling, immersive galleries, and luxury visual presentation for modern photographers and creative studios.",
    highlights: [
      "Built a fully responsive photography portfolio using Next.js, Tailwind CSS, and Framer Motion with cinematic layouts and smooth interactions.",
      "Implemented animated masonry galleries, category-based portfolio filtering, immersive hero sections, and custom motion-driven UI experiences.",
      "Added smooth scrolling, SEO optimization, OpenGraph metadata, accessibility improvements, and performance-focused image handling.",
      "Designed a premium dark editorial interface with elegant typography, subtle animations, and mobile-first responsive layouts.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "SEO",
    ],
    type: "dev",
    link: "https://lumaframe-studio.vercel.app",
  },

  {
    slug: "aurelle-jewels",
    title: "Aurelle Jewels | Luxury Jewelry Showcase",
    description:
      "Aurelle Jewels is a premium luxury jewelry platform designed with cinematic visuals, immersive interactions, and elegant product presentation for high-end jewelry brands.",
    highlights: [
      "Developed a responsive luxury jewelry experience using Next.js, Tailwind CSS, and Framer Motion with a premium visual identity.",
      "Integrated interactive product showcases, smooth scrolling animations, optimized image rendering, and inquiry-based communication flows.",
      "Implemented modern UI transitions, responsive layouts, accessibility improvements, and production-ready SEO optimization.",
      "Built immersive premium sections using React Three Fiber and modern frontend animation workflows.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Three.js",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
    ],
    type: "dev",
    link: "https://aurielle-jewels.vercel.app",
  },

  {
    slug: "aarambh-dance-studio",
    title: "Aarambh Dance Studio | Modern Dance Academy Platform",
    description:
      "Aarambh Dance Studio is a modern dance academy website designed for showcasing classes, galleries, inquiries, and premium digital experiences for dance communities.",
    highlights: [
      "Built a responsive dance studio platform using Next.js, Tailwind CSS, and Framer Motion with modern animations and cinematic visuals.",
      "Implemented dynamic class showcases, gallery systems, inquiry forms, SMTP-powered communication, and WhatsApp integrations.",
      "Added SEO optimization, sitemap generation, metadata handling, and production-focused performance improvements.",
      "Designed smooth user interactions, elegant transitions, and responsive layouts optimized for mobile and desktop devices.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "SEO",
    ],
    type: "dev",
    link: "https://aarambh-dance-studio.vercel.app",
  },

  {
    slug: "velvet-strands",
    title: "Velvet Strands | Luxury Salon Experience",
    description:
      "Velvet Strands is a premium salon and beauty platform crafted with cinematic visuals, editorial layouts, and immersive interactions for modern luxury grooming brands.",
    highlights: [
      "Developed a high-end salon experience using Next.js, Tailwind CSS, GSAP, and Framer Motion with luxury-inspired UI design.",
      "Implemented animated lookbooks, service showcases, reservation systems, smooth scrolling, and interactive gallery experiences.",
      "Optimized the platform for responsiveness, SEO, accessibility, and high-performance frontend rendering.",
      "Created a modern editorial design system with premium typography, elegant motion effects, and refined visual composition.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "SEO",
    ],
    type: "dev",
    link: "https://velvet-strands.vercel.app",
  },

  {
    slug: "nestora",
    title: "Nestora | Premium E-Commerce Experience",
    description:
      "Nestora is a premium e-commerce platform designed with smooth shopping workflows, modern UI systems, and responsive product experiences for online retail brands.",
    highlights: [
      "Built a responsive e-commerce application using Next.js, Tailwind CSS, Zustand, and Framer Motion with modern shopping interactions.",
      "Implemented product filtering, cart management, authentication flows, checkout systems, and persistent client-side state management.",
      "Added optimized product pages, smooth transitions, SEO-friendly routing, and responsive storefront layouts.",
      "Designed premium UI interactions with performance-focused rendering and scalable frontend architecture.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "SEO",
    ],
    type: "dev",
    link: "https://nestora-one-zeta.vercel.app",
  },

  {
    slug: "iron-pulse-fitness",
    title: "Iron Pulse Fitness | Premium Fitness Platform",
    description:
      "Iron Pulse Fitness is a modern fitness platform focused on workout programs, class schedules, and interactive health tools with a premium dark aesthetic.",
    highlights: [
      "Developed a premium fitness platform using Next.js, Tailwind CSS, GSAP, and Framer Motion with cinematic UI interactions.",
      "Implemented class schedules, transformation showcases, BMI tools, galleries, and smooth animated user experiences.",
      "Integrated responsive layouts, SEO optimization, accessibility improvements, and production-ready frontend architecture.",
      "Built modern dark-themed interfaces with optimized motion design and performance-focused rendering.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "SEO",
    ],
    type: "dev",
    link: "https://iron-pulse-fitness-iota.vercel.app",
  },

  {
    slug: "satguru-event",
    title: "Satguru Event | Luxury Event Planning Platform",
    description:
      "Satguru Event is a luxury event planning platform designed with immersive visuals, premium interactions, and advanced booking experiences for high-end event businesses.",
    highlights: [
      "Built a cinematic event planning platform using Next.js, Tailwind CSS, and Framer Motion with luxury-focused UI systems.",
      "Implemented booking workflows, portfolio showcases, animated service sections, inquiry systems, and SMTP-based email handling.",
      "Added responsive layouts, premium dark interfaces, SEO optimization, and advanced frontend animations.",
      "Created interactive visual experiences with smooth scrolling, layered compositions, and elegant motion transitions.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "SEO",
    ],
    type: "dev",
    link: "#",
  },

  {
    slug: "bombay-facility-services",
    title: "Bombay Facility Services | Professional Business Platform",
    description:
      "Bombay Facility Services is a professional facility management and manpower platform focused on service showcases, recruitment workflows, and client inquiry management.",
    highlights: [
      "Developed a responsive business platform using Next.js, Tailwind CSS, and Framer Motion with modern professional UI components.",
      "Implemented service showcases, recruitment sections, quote request systems, and inquiry management workflows.",
      "Added dark/light theme support, responsive layouts, SEO optimization, and performance-focused frontend architecture.",
      "Integrated contact systems, SMTP communication flows, and scalable reusable component structures.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "SEO",
    ],
    type: "dev",
    link: "https://bfs-security.vercel.app",
  },

  {
    slug: "axovia",
    title: "Axovia | Digital Engineering & Agency Platform",
    description:
      "Axovia is a modern digital agency platform with portfolio management, dynamic content systems, and an advanced admin dashboard architecture.",
    highlights: [
      "Built a modern agency ecosystem using Next.js, Tailwind CSS, Framer Motion, and Supabase with scalable frontend architecture.",
      "Implemented portfolio management, dynamic content systems, admin dashboards, inquiry tracking, and real-time content workflows.",
      "Integrated authentication systems, SEO optimization, responsive layouts, and production-ready deployment architecture.",
      "Designed premium UI systems with modern motion interactions, structured data handling, and scalable reusable components.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
      "SEO",
    ],
    type: "dev",
    link: "https://axovia-delta.vercel.app",
  },

  {
    slug: "open-thoughts",
    title: "OpenThoughts | User-Generated Content Platform",
    description:
      "OpenThoughts is a community-driven content platform where users can publish poems, short stories, quotes, and personal thoughts in Hindi and English.",
    highlights: [
      "Built a fully responsive content platform using Next.js App Router, React, and Tailwind CSS with strong focus on readability and UX.",
      "Implemented category-based browsing, author pages, pagination, likes, views, and comments for smooth content discovery.",
      "Integrated Firebase Firestore and Authentication with admin approval workflow and real-time updates.",
      "Added SEO-friendly metadata, sitemap, robots configuration, theme toggle, and production-ready deployment.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Firebase",
      "Tailwind CSS",
      "SEO",
      "Google Search Console",
    ],
    type: "dev",
    github: "https://github.com/yadav-himanshu/openThoughts",
    link: "https://open-thoughts-pi.vercel.app",
  },

  {
    slug: "recipe-finder",
    title: "Recipe Finder App | Recipe Discovery Platform",
    description:
      "A responsive recipe discovery application that allows users to search, explore, and save recipes using a public API.",
    highlights: [
      "Implemented real-time recipe search with debounced input to improve performance and reduce unnecessary API calls.",
      "Built a global favorites system using React Context API with persistent localStorage support.",
      "Designed a responsive UI with skeleton loaders, cuisine filters, and smooth hover interactions.",
      "Structured the app using reusable components and performance optimizations with useMemo.",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Context API",
      "REST API",
      "LocalStorage",
    ],
    type: "dev",
    github: "https://github.com/yadav-himanshu/Recipes-Finder",
    link: "https://recipes-finder-mvec.vercel.app",
  },

  {
    slug: "shop-nest",
    title: "Shop Nest | E-Commerce Product Display",
    description:
      "ShopNest is a frontend-focused e-commerce web application that simulates a real online shopping experience.",
    highlights: [
      "Built product listing, search, filtering, cart, and checkout flows using Vanilla JavaScript.",
      "Implemented persistent cart and authentication state using localStorage.",
      "Designed a responsive UI with reusable layouts and mobile-friendly navigation.",
      "Structured the project using modular JavaScript architecture for scalability.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage",
      "CSS Grid",
    ],
    type: "dev",
    github: "https://github.com/yadav-himanshu/ShopNest",
    link: "https://shop-nest-lemon.vercel.app",
  },

  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "A modern personal portfolio website built to showcase frontend development skills, projects, and professional experience.",
    highlights: [
      "Built a component-driven portfolio using Next.js and TypeScript with reusable content sections.",
      "Implemented smooth animations and interactions using Framer Motion.",
      "Designed a custom dark/light theme system using CSS variables and localStorage.",
      "Integrated a functional contact form with Nodemailer and deployed on Vercel.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "Vercel",
    ],
    type: "dev",
    github: "https://github.com/yadav-himanshu/Portfolio",
    link: "https://himanshu-portfolio-pink.vercel.app",
  },

  {
    slug: "contact-app",
    title: "Contact Management App",
    description:
      "A responsive contact management application with real-time synchronization using Firebase Firestore.",
    highlights: [
      "Built a real-time contact management system using Firebase Firestore.",
      "Implemented add, edit, delete, and search functionality with modal-based UI.",
      "Used Formik and Yup for structured form handling and validation.",
      "Designed reusable UI components and scalable custom hooks.",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Firebase Firestore",
      "Formik",
      "Yup",
    ],
    type: "dev",
    github: "https://github.com/yadav-himanshu/Contact-App",
    link: "https://firebase-contact-app-gold.vercel.app",
  },

  {
    slug: "dr-jagpreet-singh",
    title: "Dr. Jagpreet Singh | Professional Medical Website",
    description:
      "A professional healthcare website designed for a medical specialist with strong focus on accessibility and appointment booking.",
    highlights: [
      "Built a responsive medical website using WordPress and Elementor with patient-friendly navigation.",
      "Integrated appointment booking, inquiry forms, and mobile-optimized consultation workflows.",
      "Designed treatment sections, doctor profile pages, and accessibility-focused layouts.",
      "Optimized the platform for SEO, responsiveness, and performance.",
    ],
    techStack: [
      "WordPress",
      "Elementor",
      "Custom CSS",
      "Appointment Booking",
      "SEO",
    ],
    type: "wordpress",
    category: "Healthcare",
    previewTag: "Medical Website",
    link: "https://drjagpreetsingh.in",
  },

  {
    slug: "mad-ads-media",
    title: "Mad Ads Media | Creative Agency Website",
    description:
      "A modern creative agency website built for showcasing branding services and digital campaigns.",
    highlights: [
      "Developed a responsive agency website using WordPress and Elementor.",
      "Created service showcase pages, portfolio sections, and inquiry forms.",
      "Optimized responsiveness and smooth user experience across devices.",
      "Implemented SEO-friendly layouts and performance-focused structure.",
    ],
    techStack: [
      "WordPress",
      "Elementor",
      "Responsive Design",
      "SEO",
      "Contact Forms",
    ],
    type: "wordpress",
    category: "Creative Agency",
    previewTag: "Agency Website",
    link: "https://wearemadads.com",
  },

  {
    slug: "genics-wellness-care",
    title: "Genics Wellness Care | Wellness E-Commerce Platform",
    description:
      "A modern wellness e-commerce website focused on smooth shopping experience and responsive online store functionality.",
    highlights: [
      "Built a WooCommerce-powered e-commerce platform using WordPress.",
      "Designed product pages, category layouts, checkout flows, and storefront sections.",
      "Integrated Elementor-based landing pages and SEO optimization.",
      "Implemented responsive layouts and user-friendly shopping experience.",
    ],
    techStack: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "HTML & CSS",
      "SEO",
    ],
    type: "wordpress",
    category: "E-Commerce",
    previewTag: "Online Store",
    link: "https://genicswellnesscare.com",
  },

  {
    slug: "dr-mj-naidu",
    title: "Dr. MJ Naidu | Hospital & Healthcare Website",
    description:
      "A professional hospital website designed for healthcare services and patient communication.",
    highlights: [
      "Developed a responsive healthcare platform using WordPress and Elementor.",
      "Created treatment pages, doctor details, and inquiry management workflows.",
      "Optimized accessibility, responsiveness, and SEO structure.",
      "Implemented clean navigation and performance-focused frontend structure.",
    ],
    techStack: [
      "WordPress",
      "Elementor",
      "HTML & CSS",
      "SEO",
      "Contact Forms",
    ],
    type: "wordpress",
    category: "Healthcare",
    previewTag: "Hospital Website",
    link: "https://mjnaiduhospitals.com",
  },

  {
    slug: "shake-n-flair",
    title: "Shake N Flair | Bartending Services Website",
    description:
      "A modern bartending services website focused on premium presentation and booking inquiries.",
    highlights: [
      "Built a responsive service website using WordPress with modern event-focused layouts.",
      "Integrated video sections, gallery showcases, and inquiry systems.",
      "Designed engaging landing pages with premium visuals and smooth navigation.",
      "Optimized responsiveness, SEO structure, and performance.",
    ],
    techStack: [
      "WordPress",
      "Responsive Design",
      "Booking Features",
      "SEO",
      "Custom UI Layouts",
    ],
    type: "wordpress",
    category: "Events & Hospitality",
    previewTag: "Service Website",
    link: "https://shakenflair.com",
  },
];

export const devProjects = projects.filter((p) => p.type === "dev");
export const wordpressProjects = projects.filter((p) => p.type === "wordpress");
