"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projectData";
import { techIcons } from "@/data/techIcons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Showcase() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="showcase" className="relative w-full py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">
              My Projects
            </h2>

            <a
              href="/projects"
              className="text-sm font-medium text-[var(--muted-2)]
      hover:text-cyan-500 transition"
            >
              View all →
            </a>
          </div>

          <p className="mt-4 text-base text-left text-[var(--muted-2)] max-w-xl">
            Selected projects demonstrating frontend architecture, UI/UX,
            performance, and real-world implementation.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button
            ref={prevRef}
            className="p-2 rounded-full border border-[var(--border-soft)]
            hover:bg-[var(--card-2)] transition"
          >
            <ChevronLeft />
          </button>

          <button
            ref={nextRef}
            className="p-2 rounded-full border border-[var(--border-soft)]
            hover:bg-[var(--card-2)] transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Swiper */}
        <div className="relative pb-6">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            centeredSlides
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              type: "progressbar",
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full"
          >
            {projects.map((proj, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <div
                  className="w-full rounded-2xl border p-8 shadow-md
                transition-all duration-500"
                  style={{
                    backgroundColor: "var(--card-2)",
                    borderColor: "var(--border-soft)",
                  }}
                >
                  {/* Content */}
                  <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-semibold text-[var(--text)]">
                      {proj.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[var(--muted-2)]">
                      {proj.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {proj.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-3 py-1 rounded-full text-xs border"
                          style={{
                            borderColor: "var(--border-soft)",
                            color: "var(--text)",
                          }}
                        >
                          {techIcons[tech] || <Globe className="w-4 h-4" />}
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 pt-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          className="flex items-center gap-1 text-sm hover:text-cyan-500 transition"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          className="flex items-center gap-1 text-sm hover:text-cyan-500 transition"
                        >
                          <Globe className="w-4 h-4" /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
