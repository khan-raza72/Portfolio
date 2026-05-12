/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
  blob: {
    "0%": {
      transform: "translate(0px, 0px) scale(1)",
    },

    "25%": {
      transform: "translate(30px, -50px) scale(1.15)",
    },

    "50%": {
      transform: "translate(-20px, 20px) scale(0.95)",
    },

    "75%": {
      transform: "translate(20px, 40px) scale(1.08)",
    },

    "100%": {
      transform: "translate(0px, 0px) scale(1)",
    },
  },

  animation: {
  blob: "blob 10s infinite ease-in-out",
},

      backgroundImage: {  
        'skills-gradient': 'linear-gradient(38.73deg,rgba(255, 255, 255, 0.1) 0%,rgba(255, 255, 255, 0.05) 100%)',
},
    },
  },
  plugins: [],
}
}
