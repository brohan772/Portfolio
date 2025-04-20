import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '../context/ThemeContext';

const ParticlesBackground = () => {
  const { isDarkMode } = useTheme();
  
  // Initialize particles with callback
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Configure particles options based on theme
  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: isDarkMode ? '#1F2937' : '#E5E7EB',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
          parallax: {
            enable: true,
            force: 20,
            smooth: 10
          }
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: isDarkMode 
          ? ['#4B5563', '#6B7280', '#2C5282', '#9CA3AF']
          : ['#6B7280', '#9CA3AF', '#0EA5E9', '#D1D5DB'],
      },
      links: {
        color: isDarkMode ? '#4B5563' : '#D1D5DB',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 0.6, // Slow speed for calm effect
        straight: false,
        trail: {
          enable: true,
          length: 30,
          fillColor: isDarkMode ? '#1F2937' : '#E5E7EB',
        },
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 30, // Fewer particles for a sleeker look
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.1,
          speed: 0.5,
          sync: false,
        },
        random: true,
        value: { min: 0.1, max: 0.4 },
      },
      shape: {
        type: ["circle", "triangle"],
      },
      size: {
        animation: {
          enable: true,
          minimumValue: 1,
          speed: 2,
          sync: false,
        },
        random: true,
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [isDarkMode]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0"
    />
  );
};

export default ParticlesBackground;