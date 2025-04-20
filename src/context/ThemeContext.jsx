import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check for saved user preference or use system preference
  const getInitialMode = () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Check for system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // State to keep track of current theme
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Update localStorage and document class when theme changes
  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update document class
    document.documentElement.classList.toggle('dark', isDarkMode);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDarkMode ? '#1F2937' : '#F9FAFB');
    }
  }, [isDarkMode]);

  // Provide the theme context to child components
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;