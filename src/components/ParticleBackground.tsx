import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle settings
    const particleCount = Math.min(window.innerWidth / 15, 100); // Adjust count based on screen size
    const particles: Particle[] = [];
    
    // Colors based on theme
    const getColors = () => {
      return theme === 'dark' 
        ? ['#9333ea', '#6366f1', '#8b5cf6', '#4f46e5', '#7e22ce'] // Purple/indigo for dark theme
        : ['#c084fc', '#a78bfa', '#818cf8', '#93c5fd', '#bfdbfe']; // Lighter purple/blue for light theme
    };
    
    // Create particles
    const createParticles = () => {
      const colors = getColors();
      particles.length = 0; // Clear existing particles
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };
    
    createParticles();
    
    // Update particles and draw
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update each particle
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.3; // Make particles semi-transparent
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }
      });
      
      // Optional: connect particles that are close to each other
      connectParticles();
      
      requestAnimationFrame(animate);
    };
    
    // Connect particles that are close to each other
    const connectParticles = () => {
      const maxDistance = 100;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark' ? '#6b46c1' : '#c4b5fd';
            ctx.globalAlpha = 0.1 * (1 - distance / maxDistance);
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Recreate particles when theme changes
    const handleThemeChange = () => {
      createParticles();
    };
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]); // Re-run when theme changes
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

export default ParticleBackground;