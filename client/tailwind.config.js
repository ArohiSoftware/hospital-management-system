/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jaini: ['Jaini', 'sans-serif'], // You can replace 'sans-serif' with a fallback font if needed
      },
      backgroundImage: {


        'custom-gradient': 'linear-gradient(113.47deg, #D6FCD2 0%, #E0FDFA 28.34%, #E4E5EA 58.67%, #E0E2F4 99.45%)',
        'custom-gradient-1': 'linear-gradient(113.47deg,rgb(0, 20, 65) 0%,rgb(0, 61, 55) 28.34%,rgb(56, 58, 71) 58.67%,rgb(61, 61, 61) 99.45%)',
      },
      colors: {
      
        primary: {
          
          light: {
            gradientStart: '#D8D2FC',
            gradientMiddle: '#FDE2E0',
            gradientMiddle2: '#E6E4EA',
            gradientEnd: '#E0E9F4',
          },
          dark: {
            gradientStart: '#D8D2FC',
            gradientMiddle: '#FDE2E0',
            gradientMiddle2: '#E6E4EA',
            gradientEnd: '#E0E9F4',
          },
        },
        

      },
    },
  },
  plugins: [],
}