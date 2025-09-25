/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-once": "pulse 1s ease-out forwards",
        // Make sure you have 'blob' animation and keyframes if you use the animated background
        blob: "blob 7s infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        // Blob keyframes
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      // You don't need these here anymore if defined in global CSS
      // transformStyle: {
      //   'preserve-3d': 'preserve-3d',
      // },
      // backfaceVisibility: {
      //   hidden: 'hidden',
      // },
      // transformOrigin: {
      //   'center': 'center',
      // },
      // rotateY: {
      //   '180': '180deg',
      // },
      // perspective: {
      //   '1000': '1000px',
      // },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"), // Make sure this is installed and included
  ],
};
