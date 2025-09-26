import { FaReact, FaGraduationCap, FaSchool } from "react-icons/fa";

export const experiences = [
    {
      side: "left",
      title: "Frontend Developer",
      company: "PureCode AI",
      description:
        "Working on diverse projects such as e-commerce platforms, application UIs, and marketing UIs. Building responsive and dynamic web pages using HTML, CSS, JavaScript, React, Tailwind, and MUI. Collaborating with teams to deliver scalable solutions.",
      icon: <FaReact className="text-cyan-400 text-xl" />,
      date: "Oct 2023 – Present",
    },
    {
      side: "right",
      title: "Bachelor of Technology in Computer Science",
      company: "Pranveer Singh Institute of Technology, Kanpur (AKTU)",
      description:
        "Completed B.Tech in Computer Science with a CGPA of 7.16. Focused on software development, algorithms, and full-stack web technologies.",
      icon: <FaGraduationCap className="text-purple-400 text-xl" />,
      date: "2019 – 2022",
    },
    {
      side: "left",
      title: "Diploma in Computer Science",
      company: "Board of Technical Education, Uttar Pradesh (BTEUP)",
      description:
        "Earned Diploma in Computer Science with 72.11%. Gained solid foundation in programming, databases, and computer networks.",
      icon: <FaGraduationCap className="text-pink-400 text-xl" />,
      date: "2016 – 2019",
    },
    {
      side: "right",
      title: "Intermediate (PCM)",
      company: "Uttar Pradesh State Board (UP Board)",
      description:
        "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Achieved 78%.",
      icon: <FaSchool className="text-green-400 text-xl" />,
      date: "2014 – 2016",
    },
    {
      side: "left",
      title: "High School (Matriculation)",
      company: "Uttar Pradesh State Board (UP Board)",
      description:
        "Completed matriculation with strong academic performance and achieved 80.33%.",
      icon: <FaSchool className="text-yellow-400 text-xl" />,
      date: "2012 – 2014",
    },
  ];