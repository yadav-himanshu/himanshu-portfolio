import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFirebase, SiTypescript, SiVercel } from "react-icons/si";
import { Globe, Mail } from "lucide-react";
import { JSX } from "react";

export const techIcons: Record<string, JSX.Element> = {
  "React.js": <FaReact className="text-sky-500 text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl" />,
  "Node.js": <FaNodeJs className="text-green-600 text-xl" />,
  "Express.js": <SiExpress className="text-gray-400 text-xl" />,
  "Nodemailer": <Mail className="text-red-500 w-5 h-5" />,
  "HTML5": <FaHtml5 className="text-orange-500 text-xl" />,
  "CSS3": <FaCss3Alt className="text-blue-600 text-xl" />,
  "JavaScript": <FaJs className="text-yellow-400 text-xl" />,
  "API Integration": <Globe className="text-indigo-400 w-5 h-5" />,
  "CSS Grid/Flexbox": <FaCss3Alt className="text-teal-400 text-xl" />,
  "Firebase (Realtime Database)": <SiFirebase className="text-yellow-400 w-5 h-5" />,
  "Next.js": <FaReact className="text-black text-xl" />,
  "TypeScript": <SiTypescript className="text-blue-600 text-xl" />,
  "Vercel": <SiVercel className="text-black text-xl" />,
};