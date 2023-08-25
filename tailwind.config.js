/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
      },
      backgroundImage: () => ({
        boost_dsk: "url('/bg-boost-desktop.svg')",
        boost_mbl: "url('/bg-boots-mobile.svg')",
        bg_dsk: "url('/bg-shorten-desktop.svg)",
        bg_mbl: "url('/bg-shorten-mobile.svg)",
      }),

      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};
