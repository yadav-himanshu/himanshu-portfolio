import React from "react";

interface LogoProps {
  className?: string;
  textClassName?: string;
}

export default function Logo({ className = "", textClassName = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 select-none ${className}`}>
      {/* H logo mark — teal square */}
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-base leading-none shrink-0"
        style={{
          color: "var(--primary)",
          border: "2px solid var(--primary)",
          background: "transparent",
        }}
        aria-hidden="true"
      >
        H
      </span>
      {/* Rest of name */}
      <span className={`font-black tracking-tighter text-gradient ${textClassName}`}>
        Himanshu
      </span>
    </span>
  );
}
