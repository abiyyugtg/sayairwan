import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              Hello! I'm Irwan, a fresh graduate from SMK Negeri 2 Pengasih with a background in Computer Network and Telecommunications Engineering (TJKT). I graduated in 2025 with a passion for building innovative web solutions and network systems.
            </p>
            <p>
              My educational journey has equipped me with a strong foundation in network technologies, web development, and IT infrastructure. I'm particularly interested in the intersection of networking and modern web technologies, where I believe the future of digital innovation lies.
            </p>
            <p>
              As a tech enthusiast, I'm constantly learning and experimenting with new tools and frameworks. I believe in creating solutions that are not only technically sound but also deliver exceptional user experiences. My approach combines technical expertise with creative problem-solving to build robust, scalable, and user-friendly applications.
            </p>
            <p>
              When I'm not coding or troubleshooting networks, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge through online courses and tech communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;