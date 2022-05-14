module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#1B191F",
          "base-100": "#efefef",
          info: "#31A8ED",
          success: "#24C670",
          warning: "#F7CA26",
          error: "#F9437A",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
