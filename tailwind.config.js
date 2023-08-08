module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xss: '0.600rem',
      },

      colors: {
        customPurple: {
          100: '#DABDF1',
          200: '#B28FE4',
          300: '#8F73BB',
          400: '#6D5791',
          500: '#4B3B67',
          600: '#302746',
          700: '#231B33',
          800: '#17111F',
          900: '#0A080F',
        }, 
        roxo1: "#693E7F", 
 
        roxo2: "#EDCAFF",  
        roxo3: "#D37DFF",  
        roxo4: "#56067F",     
        roxo5: "#A964CC",
        customApricot: "#E69A74",     
      },

      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {},
  plugins: [],
}