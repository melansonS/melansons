module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          // this is for prose class
          css: {
            color: theme("colors.zinc.900"),
            p: { color: theme("colors.zinc.900") },
            h1: { color: theme("colors.zinc.900") },
            h2: { color: theme("colors.zinc.900") },
            h3: { color: theme("colors.zinc.900") },
            h4: { color: theme("colors.zinc.900") },
            h5: { color: theme("colors.zinc.900") },
            h6: { color: theme("colors.zinc.900") },
            code: { color: theme("colors.zinc.900") },
            pre: { color: theme("colors.zinc.900") },
            strong: { color: theme("colors.zinc.900") },
            blockquote: { color: theme("colors.zinc.900") },
            figcaption: { color: theme("colors.zinc.900") },
            hr: {
              opacity: 0.5,
              marginBottom: "1em",
              borderColor: theme("colors.zinc.900"),
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.stone.300"),
            p: { color: theme("colors.stone.300") },
            h1: { color: theme("colors.stone.300") },
            h2: { color: theme("colors.stone.300") },
            h3: { color: theme("colors.stone.300") },
            h4: { color: theme("colors.stone.300") },
            h5: { color: theme("colors.stone.300") },
            h6: { color: theme("colors.stone.300") },
            code: { color: theme("colors.stone.300") },
            pre: { color: theme("colors.stone.300") },
            strong: { color: theme("colors.stone.300") },
            blockquote: { color: theme("colors.stone.300") },
            figcaption: { color: theme("colors.stone.300") },
            hr: {
              opacity: 0.5,
              marginBottom: "1em",
              borderColor: theme("colors.stone.300"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
