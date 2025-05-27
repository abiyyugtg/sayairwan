// components/Footer.tsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-6 text-center text-sm transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-500"
          : "bg-white text-gray-400"
      }`}
    >
      <p>
        © {new Date().getFullYear()} Irwan Abiyyu Saputra. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
