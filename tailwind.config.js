/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        sm: "clamp(0.7rem, 1.05vi + 0.36rem, 1.2rem)",
        base: "clamp(0.88rem, 1.32vi + 0.45rem, 1.5rem)",
        lg: "clamp(1.09rem, 1.64vi + 0.56rem, 1.88rem)",
        xl: "clamp(1.37rem, 2.06vi + 0.7rem, 2.34rem)",
        "2xl": "clamp(1.71rem, 2.57vi + 0.87rem, 2.93rem)",
        "3xl": "clamp(2.14rem, 3.21vi + 1.09rem, 3.66rem)",
        "4xl": "clamp(2.67rem, 4.02vi + 1.37rem, 4.58rem)",
        "5xl": "clamp(3.34rem, 5.02vi + 1.71rem, 5.72rem)",
        "6xl": "clamp(4.17rem, 6.27vi + 2.13rem, 7.15rem)",
      },
    },
  },
  plugins: [],
};
