import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaSearch,
  FaChrome,
  FaCode,
  FaWordpress,
  FaDatabase,
  FaGraduationCap,
  FaSchool,
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
  SiWoocommerce,
  SiElementor,
} from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import type { JSX } from "react";

type IconEntry = { el: JSX.Element };

const iconMap: Record<string, IconEntry> = {
  // Timeline
  react: { el: <FaReact className="text-xl" /> },
  graduation: { el: <FaGraduationCap className="text-xl" /> },
  school: { el: <FaSchool className="text-xl" /> },
  // Skills
  js: { el: <FaJs className="text-xl" /> },
  nextjs: { el: <SiNextdotjs className="text-xl" /> },
  tailwind: { el: <SiTailwindcss className="text-xl" /> },
  wordpress: { el: <FaWordpress className="text-xl" /> },
  woocommerce: { el: <SiWoocommerce className="text-xl" /> },
  elementor: { el: <SiElementor className="text-xl" /> },
  database: { el: <FaDatabase className="text-xl" /> },
  typescript: { el: <SiTypescript className="text-xl" /> },
  mongodb: { el: <SiMongodb className="text-xl" /> },
  html: { el: <FaHtml5 className="text-xl" /> },
  css: { el: <FaCss3Alt className="text-xl" /> },
  nodejs: { el: <FaNodeJs className="text-xl" /> },
  express: { el: <SiExpress className="text-xl" /> },
  firebase: { el: <SiFirebase className="text-xl" /> },
  // Tools
  vscode: { el: <BsCodeSlash className="text-xl" /> },
  github: { el: <FaGithub className="text-xl" /> },
  eslint: { el: <SiEslint className="text-xl" /> },
  prettier: { el: <SiPrettier className="text-xl" /> },
  chrome: { el: <FaChrome className="text-xl" /> },
  vercel: { el: <SiVercel className="text-xl" /> },
  netlify: { el: <SiNetlify className="text-xl" /> },
  search: { el: <FaSearch className="text-xl" /> },
  api: { el: <FaCode className="text-xl" /> },
};

export function getIcon(iconKey: string): JSX.Element {
  return iconMap[iconKey]?.el ?? <FaCode className="text-xl" />;
}
