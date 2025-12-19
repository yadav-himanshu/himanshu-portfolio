import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaSearch,
  FaChrome,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiEslint,
  SiPrettier,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

export const skills = [
  {
    icon: <FaJs className="text-yellow-400" />,
    label: "JavaScript (ES6)",
    description: "Building dynamic web apps with JS",
  },
  {
    icon: <FaReact className="text-cyan-400" />,
    label: "React.js",
    description: "Building interactive UIs with React",
  },
  {
    icon: <SiNextdotjs className="text-black" />,
    label: "Next.js",
    description: "Server-side rendering & static site generation",
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
    label: "Tailwind CSS",
    description: "Utility-first CSS for rapid UI development",
  },
  {
    icon: <SiMongodb className="text-emerald-600" />,
    label: "MongoDB",
    description: "NoSQL database for scalable applications",
  },
  {
    icon: <SiTypescript className="text-blue-600" />,
    label: "TypeScript",
    description: "Type-safe JavaScript for scalable applications",
  },
  {
    icon: <FaHtml5 className="text-orange-500" />,
    label: "HTML5",
    description: "Structuring web pages semantically",
  },
  {
    icon: <FaCss3Alt className="text-blue-500" />,
    label: "CSS3",
    description: "Styling responsive web interfaces",
  },
  {
    icon: <FaNodeJs className="text-green-600" />,
    label: "Node.js",
    description: "Building server-side apps with Node",
  },
  {
    icon: <SiExpress className="text-gray-600" />,
    label: "Express.js",
    description: "Fast web framework for Node.js",
  },
  {
    icon: <SiFirebase className="text-yellow-400" />,
    label: "Firebase",
    description: "Backend as a Service (BaaS) for real-time apps",
  },
];

export const tools = [
  {
    icon: <BsCodeSlash className="text-blue-600" />,
    label: "Visual Studio Code",
    description: "Code editor for efficient development",
  },
  {
    icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
    label: "Git & GitHub",
    description: "Version control for collaborative work",
  },
  {
    icon: <SiEslint className="text-violet-600" />,
    label: "ESLint",
    description: "Linting tool to ensure code quality",
  },
  {
    icon: <SiPrettier className="text-pink-400" />,
    label: "Prettier",
    description: "Code formatter for consistent style",
  },
  {
    icon: <FaChrome className="text-yellow-500" />,
    label: "Chrome DevTools",
    description: "Debugging and profiling web applications",
  },
  {
    icon: <SiVercel className="text-black dark:text-white" />,
    label: "Vercel",
    description: "Platform for serverless deployment",
  },
  {
    icon: <SiNetlify className="text-teal-500" />,
    label: "Netlify",
    description: "Platform for continuous deployment",
  },
  {
    icon: <FaSearch className="text-green-600" />,
    label: "Screaming Frog (SEO Spider)",
    description: "SEO audit and performance reports",
  },
  {
    icon: <FaCode className="text-gray-700" />,
    label: "REST / API design",
    description: "Designing and building RESTful APIs",
  },
];
