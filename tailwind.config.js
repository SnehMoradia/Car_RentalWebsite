/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": "Lato, sans-serif"
      },
      colors: {
        'black-olive': '#404040',
        'platinum': "#dfe1e5",
        'ghost-white': '#f7f9fb',
        'pigment-blue': "#374091",
        'blood-orange':'#d1001b',
        'gunmetal':'#2a2c43',
        'dark-gunmetal':'#16182F',
        'ripe-mango':'#FEC42D',
        'who':'hsla(0,0%,100%,.6)',
        'wh1':'hsla(0,0%,100%,.8)',
        'wh2':'hsla(0,0%,100%,.7)',
        'vampire-black':'#0a0a0a',
        'wh3':'hsla(0,0%,42.4%,.8)',
      },
      zIndex: {
        'full': '9999',
      },
      height: {
        '18': '72px',
      },
      maxWidth: {
        '912': '912px',
        '100':'calc(33.33% - 57.34px)'
        
      },
      transitionDuration: {
        '4': '0.4s',
        '2':'0.2s',
    },
    padding:{
      '30':'118px',
      '18':'70px',
      '123':'123px',
      '41':'41px',
      '42':'42px',
      '31':'30px',

      
    },
    margin:{
      '62':'62px',
    },
    scale:
    {
      '12':'1.2',
    },
    fontSize:{
      '65':'65px',
      '23':'23px',
      '30':'30px'
    },
    boxShadow:{
      'shod':'-10px 10px 60px rgba(0,0,0,.12)',
      'sho':'-10px 10px 60px rgba(0,0,0,.08)',
    },
    height:{
      'mx':'109%',
      'fd':'837px',
    },
    gap:{
      '120':'160px',
      '23':'102px',
      '52':'52px',
    },
  inset:{
'35':'140.96px',
'200':'200px',
'15':'240px',
'40':'400px',
'57':'57px',
  },
backgroundSize:{
'50':'50%',
'95':'95%',
'45':'45%',
'370':'370px',
'80':'80%',
},
boxShadow:{
  '3xl':'-10px 10px 60px rgba(0,0,0,.08)',
  '4xl':' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
  '10xl':'20px -20px 60px rgba(0,0,0,.12)',
},
clipPath: {
  mypolygon: "polygon(100% 0,0 100%,100% 100%)",
},
  },
    container: {
      screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1170px',
          
      }
  },
  screens:{
    'sn':'500px',
    'sm':'640px',
    'md':'768px',
    'lg':'991px',
    'xl':'1200px',
    '2xl':'1250px',
  },
},
  plugins: [
    require('tailwind-clip-path'),
    plugin(function({ matchUtilities, theme }) {
    matchUtilities(
        {
            'bg-gradient': (angle) => ({
                'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
            }),
        },
        {
            values: Object.assign(
                theme('bgGradientDeg', {}),
                {
                    10: '10deg',
                    15: '15deg',
                    20: '20deg',
                    25: '25deg',
                    30: '30deg',
                    45: '45deg',
                    60: '60deg',
                    90: '90deg',
                    120: '120deg',
                    135: '135deg',
                    270:'270deg',
                }
            )
        }
    )
})
],
}
