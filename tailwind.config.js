/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        // Removing liverpoolRed and adding sleek blue color palette
        slateBlue: '#0369A1', // primary blue (replacing liverpoolRed)
        oceanBlue: '#0369A1', // medium blue for contrast
        skyBlue: '#0EA5E9', // lighter accent blue  
        deepBlue: '#075985', // darker blue for gradients
        grey: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
