export interface Experience {
  title: string;
  company: string;
  description: string;
  date: string;
  iconKey: "react" | "graduation" | "school";
  iconColor: string;
  side: "left" | "right";
}

export const experiences: Experience[] = [
  {
    side: "left",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Building custom websites and web applications for clients as an independent freelancer. Delivering full-stack solutions using Next.js and React, along with custom WordPress sites powered by Elementor Pro, WooCommerce, and Advanced Custom Fields — tailored to each client's business needs.",
    iconKey: "react",
    iconColor: "text-cyan-400",
    date: "Jan 2026 – Present",
  },
  {
    side: "right",
    title: "Frontend Developer",
    company: "PureCode AI",
    description:
      "Contributed to the PureCode AI web platform by building and improving user-facing features such as the Discover page, component sharing, enterprise flows, and user invitations. Focused on creating reusable UI components, fixing UI-related issues, and maintaining a consistent, scalable frontend using React and Tailwind CSS.",
    iconKey: "react",
    iconColor: "text-cyan-400",
    date: "Oct 2023 – Dec 2025",
  },
  {
    side: "left",
    title: "Bachelor of Technology in Computer Science",
    company: "Pranveer Singh Institute of Technology, Kanpur (AKTU)",
    description:
      "Completed B.Tech in Computer Science with a CGPA of 7.16. Focused on software development, algorithms, and full-stack web technologies.",
    iconKey: "graduation",
    iconColor: "text-purple-400",
    date: "2019 – 2022",
  },
  {
    side: "right",
    title: "Diploma in Computer Science",
    company: "Board of Technical Education, Uttar Pradesh (BTEUP)",
    description:
      "Earned Diploma in Computer Science with 72.11%. Gained solid foundation in programming, databases, and computer networks.",
    iconKey: "graduation",
    iconColor: "text-pink-400",
    date: "2016 – 2019",
  },
  {
    side: "left",
    title: "Intermediate (PCM)",
    company: "Uttar Pradesh State Board (UP Board)",
    description:
      "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Achieved 78%.",
    iconKey: "school",
    iconColor: "text-green-400",
    date: "2014 – 2016",
  },
  {
    side: "right",
    title: "High School (Matriculation)",
    company: "Uttar Pradesh State Board (UP Board)",
    description:
      "Completed matriculation with strong academic performance and achieved 80.33%.",
    iconKey: "school",
    iconColor: "text-yellow-400",
    date: "2012 – 2014",
  },
];
