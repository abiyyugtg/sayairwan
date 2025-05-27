import React, { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";
import { ArrowDownCircle } from "lucide-react";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20"
    >
      <div
        className={`container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Irwan Abiyyu Saputra
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Fresh Graduate – Network & Web Tech Enthusiast
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
            Building the digital future through innovative web solutions and
            network engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/src/cv.pdf" // Ganti dengan path ke file PDF Anda
              download // Menambahkan atribut download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border border-purple-300 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full">
            {/* Animated glowing border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 animate-pulse blur-xl opacity-50"></div>

            {/* Image container */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-purple-100 dark:bg-gray-800 border-4 border-white dark:border-gray-700">
              <img
                src="/src/irwin.jpg"
                alt="Irwan Abiyyu Saputra"
                style={{
                  width: "170%", // Memperbesar lebar gambar
                  height: "100%", // Menjaga tinggi gambar sama dengan kontainer
                  objectFit: "cover", // Memastikan gambar menutupi area kontainer
                  objectPosition: "center", // Memusatkan gambar
                  position: "absolute", // Memposisikan gambar secara absolut
                  top: "70%", // Menggeser gambar ke bawah
                  left: "70%", // Menggeser gambar ke kanan
                  transform: "translate(-70%, -70%)", // Menggeser gambar untuk menampilkan bagian tengah
                  borderRadius: "50%", // Membuat gambar berbentuk bulat
                  transition: "transform 0.3s", // Menambahkan transisi saat hover
                }}
                className="hover:scale-150" // Memperbesar gambar saat di-hover
              />
            </div>

            {/* Floating tech icons around the image */}
            <div className="absolute -inset-8 z-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white dark:bg-gray-800 shadow-lg p-2 animate-float"
                  style={{
                    top: `${20 + Math.sin((i * 72 * Math.PI) / 180) * 120}%`,
                    left: `${20 + Math.cos((i * 72 * Math.PI) / 180) * 120}%`,
                    animationDelay: `${i * 0.2}s`,
                    transform: `scale(${0.8 + Math.random() * 0.4})`,
                  }}
                >
                  <div className="w-8 h-8 flex items-center justify-center text-purple-500">
                    {/* We'll replace these with actual tech logos */}
                    {i % 5 === 0 && <span className="text-xl">📱</span>}
                    {i % 5 === 1 && <span className="text-xl">💻</span>}
                    {i % 5 === 2 && <span className="text-xl">🌐</span>}
                    {i % 5 === 3 && <span className="text-xl">⚙️</span>}
                    {i % 5 === 4 && <span className="text-xl">🚀</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-500 dark:text-purple-400 animate-bounce"
      >
        <ArrowDownCircle size={32} />
      </a>
    </section>
  );
};

export default Hero;
