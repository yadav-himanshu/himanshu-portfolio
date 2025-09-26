"use client";

import React from "react";

interface SectionProps {
  id: string;
//   title: string;
  children: React.ReactNode;
}

// const Section: React.FC<SectionProps> = ({ id, title, children }) => {
const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      {/* <h2 className="text-5xl text-gray-900 dark:text-gray-100 font-bold mb-6">{title}</h2> */}
      <div className="text-gray-800 dark:text-gray-300 w-full max-w-[1200px] text-lg flex flex-col gap-4 justify-center items-center">{children}</div>
    </section>
  );
};

export default Section;
