// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        
      },
      animation: {
       
      },
      backgroundImage: {
        // "skills-gradient":
        //   "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
      },
      // Add will-change utilities
      willChange: {
        'transform': 'transform',
      },
    },
  },
  plugins: [
    // Add plugin for reduced motion
    function({ addVariant, addUtilities }) {
      addVariant('motion-reduce', '@media (prefers-reduced-motion: reduce)');
      
      addUtilities({
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      });
    },
  ],
};