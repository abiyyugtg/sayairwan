import React, { useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const skills: Skill[] = [
    {
      name: "Vue.js",
      category: "frontend",
      icon: "https://logospng.org/download/vue.js/vue-js-1536.png",
      color: "bg-green-500",
    },
    {
      name: "PHP",
      category: "backend",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      color: "bg-blue-500",
    },
    {
      name: "Laravel",
      category: "backend",
      icon: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png",
      color: "bg-red-500",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
      color: "bg-blue-400",
    },
    {
      name: "Bootstrap",
      category: "frontend",
      icon: "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg",
      color: "bg-purple-500",
    },
    {
      name: "WordPress",
      category: "tools",
      icon: "https://logos-world.net/wp-content/uploads/2020/10/WordPress-Emblem.png",
      color: "bg-blue-500",
    },
    {
      name: "Claude AI",
      category: "tools",
      icon: "https://freepnglogo.com/images/all_img/claude-ai-icon-65aa.png",
      color: "bg-yellow-500",
    },
    {
      name: "SQLYog",
      category: "tools",
      icon: "https://nextechinfosystems.com/assets/images/logos/sqlyog-logo.png",
      color: "bg-orange-500",
    },
    {
      name: "VSCode",
      category: "tools",
      icon: "https://code.visualstudio.com/assets/favicon.ico",
      color: "bg-blue-600",
    },
    {
      name: "XAMPP",
      category: "tools",
      icon: "https://pnghq.com/wp-content/uploads/xampp-logo-png-transparent-57294-300x300.png",
      color: "bg-orange-500",
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: "https://clipground.com/images/html5-logo-2.png",
      color: "bg-orange-600",
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: "https://i.imgflip.com/6ejuoo.png",
      color: "bg-blue-500",
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>

          {/* Filter buttons - using custom classes to avoid conflicts */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "frontend", "backend", "tools"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-600"
                } tw-button`} // Added custom class prefix
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-200 dark:from-gray-900 dark:to-purple-900/30 p-4 shadow-inner">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="absolute flex items-center justify-center tw-skill-item" // Added custom class
                style={{
                  top: `${40 + Math.sin(index * 0.5) * 30}%`,
                  left: `${((index * 7) % 80) + 10}%`,
                  zIndex: Math.floor(Math.random() * 10),
                  animation: `float ${
                    3 + Math.random() * 2
                  }s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="group relative flex flex-col items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 md:w-10 md:h-10 mb-2 object-contain"
                  />
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                  <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded transition-opacity duration-300 whitespace-nowrap">
                    {skill.category.charAt(0).toUpperCase() +
                      skill.category.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS to prevent conflicts */}
      <style>{`
        /* Prefix Tailwind classes to avoid conflicts */
        .tw-button {
          border: none;
          outline: none;
        }

        .tw-skill-item {
          /* Additional styles if needed */
        }

        /* Animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
