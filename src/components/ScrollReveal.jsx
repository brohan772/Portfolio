import React, { useEffect } from 'react';

// Utility to add reveal animations to any component on scroll
const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        } else {
          revealElements[i].classList.remove('active');
        }
      }
    };
    
    // Initial check
    revealOnScroll();
    
    // Add event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return null;
};

export default ScrollReveal;