import React, { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: "Project Inventaris",
      description:
        "A website used for borrowing workshop tools and managing workshop equipment.",
      tags: ["Laravel 12", "Vue", "Tailwind CSS"],
      image: "/src/inventaris.png",
      // githubLink: "#",
      // demoLink: "#",
    },
    {
      title: "Project Belajar",
      description: "Learn WordPress by creating a website for an organization.",
      tags: ["Wordpress"],
      image: "/src/ngesti.png",
      // githubLink: "#",
      demoLink: "http://prmngestiharjotengah.wuaze.com/",
    },
    {
      title: "Project 3",
      description: "Coming soon.",
      tags: ["-"],
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",
      // githubLink: "#",
      // demoLink: "#",
    },
    {
      title: "Project 4",
      description: "Coming soon.",
      tags: ["-"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      // githubLink: "#",
      // demoLink: "#",
    },
    {
      title: "Project 5",
      description: "Coming soon.",
      tags: ["-"],
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      // githubLink: "#",
      // demoLink: "#",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-12 rounded-full"></div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft
              size={24}
              className="text-gray-700 dark:text-gray-300"
            />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight
              size={24}
              className="text-gray-700 dark:text-gray-300"
            />
          </button>

          {/* Projects Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex pb-8 overflow-x-auto scrollbar-hide space-x-8 snap-x snap-mandatory pl-2 pr-2"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-96 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 snap-center"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    {/* <a
                      href={project.githubLink}
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a> */}
                    <a
                      href={project.demoLink}
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator (for mobile) */}
          <div className="md:hidden flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
              ></div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 italic">
              More projects in development. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
