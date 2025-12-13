"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import { projects } from "@/app/data/projectData";
import { techIcons } from "@/app/data/techIcons";
import { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="showcase" className="relative w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-6 text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text)" }}
          >
            My Projects
          </h2>

          <p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--muted-2)" }}
          >
            Here are some of my recent projects showcasing my skills in frontend
            development, responsive design, and interactive UI/UX.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, EffectCreative, Navigation]}
          pagination={{ clickable: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions;
            if (navigation) {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          loop={true}
          grabCursor={true}
          effect="creative"
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          creativeEffect={{
            prev: { shadow: true, translate: ["-115%", 0, -300], opacity: 0.5 },
            next: { shadow: true, translate: ["115%", 0, -300], opacity: 0.5 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {projects.map((proj, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`group relative flex flex-col p-6 rounded-2xl border 
                shadow-md hover:shadow-2xl transition-all duration-700 ease-in-out 
                min-h-[400px] md:min-h-[450px] ${
                  activeIndex === idx
                    ? "scale-100 z-20 saturate-150"
                    : "scale-[0.9] opacity-80 blur-[1px]"
                }`}
                style={{
                  backgroundColor: "var(--card-2)",
                  borderColor: "var(--border-soft)",
                }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3"
                  style={{ color: "var(--text)" }}
                >
                  {proj.title}
                </h3>

                <p
                  className="text-sm sm:text-base mb-4 leading-relaxed"
                  style={{ color: "var(--muted-2)" }}
                >
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm 
                      hover:scale-105 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card-2) 65%, var(--bg))",
                        border: "1px solid var(--border-soft)",
                        color: "var(--text)",
                      }}
                    >
                      {techIcons[tech] || <Globe className="w-4 h-4" />}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 mt-auto">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 transition-colors text-sm sm:text-base"
                      style={{ color: "var(--text)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")} // cyan-500
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                  )}

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 transition-colors text-sm sm:text-base"
                      style={{ color: "var(--text)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")} // cyan-500
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                    >
                      <Globe className="w-5 h-5" /> Live
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block px-6 py-2.5 rounded-lg 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              text-white font-medium shadow-md 
              hover:from-cyan-600 hover:to-blue-700 
              hover:shadow-lg transition-all duration-300 
              text-sm sm:text-base"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
