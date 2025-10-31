const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
    },
  },
  plugins: [],
};
export default config;
