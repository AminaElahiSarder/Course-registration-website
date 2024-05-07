/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
  
    themes: [
      "light", "dark", "cupcake",

      {   
        mytheme: {
        
"primary": "#ff00b7",
        
"secondary": "#005bd0",
        
"accent": "#00aeff",
        
"neutral": "#171404",
        
"base-100": "#321e34",
        
"info": "#00c4eb",
        
"success": "#009e00",
        
"warning": "#d45900",
        
"error": "#e04663",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}

