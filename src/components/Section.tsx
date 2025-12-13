"use client";

import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <div
        className="w-full max-w-[1200px] text-lg flex flex-col gap-4 justify-center items-center"
        style={{ color: "var(--muted-2)" }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
