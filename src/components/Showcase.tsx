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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            My Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
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
            prev: {
              shadow: true,
              translate: ["-115%", 0, -300],
              opacity: 0.5,
            },
            next: {
              shadow: true,
              translate: ["115%", 0, -300],
              opacity: 0.5,
            },
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
                border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 
                shadow-md hover:shadow-2xl transition-all duration-700 ease-in-out 
                min-h-[400px] md:min-h-[450px] ${
                  activeIndex === idx
                    ? "scale-100 z-20 saturate-150"
                    : "scale-[0.9] opacity-80 blur-[1px]"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-cyan-400 mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base dark:text-gray-300 mb-4 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 rounded-full 
                      bg-gray-100 dark:bg-gray-800 text-xs sm:text-sm font-medium shadow-sm 
                      hover:scale-105 hover:shadow-md transition-all"
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
                      className="flex items-center gap-1 text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm sm:text-base"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm sm:text-base"
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
