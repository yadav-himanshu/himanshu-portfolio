import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiVercel,
  SiFramer,
  SiGoogle,
} from "react-icons/si";
import { Globe, Mail, Database, Layers } from "lucide-react";
import { JSX } from "react";

export const techIcons: Record<string, JSX.Element> = {
  // Core Frontend
  React: <FaReact className="text-sky-500 text-xl" />,
  "React.js": <FaReact className="text-sky-500 text-xl" />,
  "Next.js": <FaReact className="text-black text-xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-xl" />,

  // Styling & UI
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl" />,
  CSS3: <FaCss3Alt className="text-blue-600 text-xl" />,
  "CSS Grid & Flexbox": <FaCss3Alt className="text-teal-400 text-xl" />,
  "CSS Grid/Flexbox": <FaCss3Alt className="text-teal-400 text-xl" />,
  HTML5: <FaHtml5 className="text-orange-500 text-xl" />,

  // JavaScript & State
  JavaScript: <FaJs className="text-yellow-400 text-xl" />,
  "Context API": <Layers className="text-indigo-400 w-5 h-5" />,
  LocalStorage: <Database className="text-emerald-500 w-5 h-5" />,

  // Backend / Services
  "Node.js": <FaNodeJs className="text-green-600 text-xl" />,
  "Express.js": <SiExpress className="text-gray-400 text-xl" />,
  Nodemailer: <Mail className="text-red-500 w-5 h-5" />,

  // Firebase
  Firebase: <SiFirebase className="text-yellow-400 w-5 h-5" />,
  "Firebase Firestore": <SiFirebase className="text-yellow-400 w-5 h-5" />,
  "Firebase (Firestore & Auth)": (
    <SiFirebase className="text-yellow-400 w-5 h-5" />
  ),
  "Firebase (Realtime Database)": (
    <SiFirebase className="text-yellow-400 w-5 h-5" />
  ),

  // Animation & UX
  "Framer Motion": <SiFramer className="text-pink-500 text-xl" />,
  "Swiper.js": <Layers className="text-purple-400 w-5 h-5" />,

  // APIs & SEO
  "Public REST API": <Globe className="text-indigo-400 w-5 h-5" />,
  "API Integration": <Globe className="text-indigo-400 w-5 h-5" />,
  SEO: <SiGoogle className="text-green-500 text-xl" />,
  "Google Search Console": <SiGoogle className="text-green-500 text-xl" />,

  // Deployment
  Vercel: <SiVercel className="text-black text-xl" />,

  // Forms & Validation
  Formik: <Layers className="text-blue-500 w-5 h-5" />,
  Yup: <Layers className="text-rose-500 w-5 h-5" />,
};
