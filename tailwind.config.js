/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      boxShadow: {
        n: "0 5px 5px rgb(0,0,0), inset  0 30px 25px -24px rgb(17,24,39), inset 0 -30px 25px -24px rgb(17,24,39)",
        nb: "5px 5px 8px rgb(0,0,0)",
        s: "inset -20px 0 20px -20px rgb(0,0,0)",
        sb: "inset 0 -15px 20px -15px rgb(0,0,0)",
        sbh: "inset 0 -15px 20px -15px rgb(0,0,0), 0 15px 10px -10px rgb(0,0,0)",
        i: "0 10px 20px -10px rgb(0,0,0)",
        bs: "10px rgb(194, 65, 12)",
      },
      fontFamily: {
        comf: "'Comfortaa', cursive",
        kan: "'Kanit', sans-serif"
      },
      animation: {
        spinx: "spin 5s linear infinite"
      },
      gridTemplateColumns: {
        c: "1fr 13rem 1fr"
      },
      minWidth: {
        btn: "8rem"
      },
      backgroundImage: {
        admin: "url('http://localhost:8000/storage/bg/background.jpg')",
      }
    },
  },
  plugins: [],
}
