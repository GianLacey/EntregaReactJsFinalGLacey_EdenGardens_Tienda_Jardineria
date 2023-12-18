/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontSize: {
      xxs: '0.6rem',
      xsmed: '14px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'segoeui': ['Tahoma, Verdana, sans-serif'],
      'franklin': ['Franklin Gothic Medium, Arial Narrow, Arial, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif']
    },
    backgroundImage: {
      'main-img': "url(https://media.admagazine.com/photos/618a64f9b67f79aa891ed98e/master/w_1600%2Cc_limit/71307.jpg)",
      'main-img-dos': "url(https://media.istockphoto.com/id/1309357895/es/v%C3%ADdeo/alejar-la-vista-a%C3%A9rea-del-hermoso-fondo-de-textura-del-patio-de-hierba-verde-%C3%A1ngulo-de-la.jpg?s=640x640&k=20&c=dyibViaiLVB9LlQhLnjKMZgk4rWla1EnEzi6fC8pjwk=)",
      'linear-gradient': 'linear-gradient(to left, rgba(175, 214, 175, 0.86), rgba(83, 134, 83, 0.86), rgba(59, 75, 59, 0.86))',
    },
    sepia: {
      25: '.25',
      75: '.75'
    }

  },
  plugins: [],
}

