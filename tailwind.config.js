module.exports = {
  //content: ["./src/*.{html,js}"],
  purge:{
    enabled: true,
    content: [
      './src/**/*.js'],
  },
  theme: {
    extend: {
      dropShadow:{
        'left': '10px 0px 0px rgb(230, 153, 0)',
        'right': '-10px 0px 0px rgb(230, 153, 0)',
        'top': '0px 10px 0px rgb(230, 153, 0)',
        'bottom': '0px -10px 0px rgb(230, 153, 0)'
      },
      boxShadow: {
        'up':'0 -4px 0 0px rgba(0, 0, 0, 0.75)',
        'up-1':'0 -6px 0 0px rgba(0, 0, 0, 0.5)',
        'up-2':'0px -10px 10px -2px #696969',
        'up-3':'0px 5px 8px -8px #696969',
        'neonUp': '0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa',
        'neonGlow': '0 0 3px #E69900,0 0 5px #E69900,0 0 10px #E69900,0 0 20px #FFC34D',
        'neon': '0 0 3px #fff, 0 0 5px #E69900,0 0 10px #E69900,0 0 14px #E69900,0 0 28px #FFC34D',      
      },
      backgroundImage:{
        'avocado':"url('/src/media/avocado.jpg')"
      },
      gridTemplateRows: {
      '12':'repeat(12, minmax(0, 1fr))',
      '13':'repeat(13, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))'
      }, 
      fontFamily:{
        Oleo: ["'Oleo Script'", "cursive"],
        Paytone:["'Paytone One'",'sans-serif'],
        Quicksand:['Quicksand']
      },
      keyframes:{
        wiggle: {
        '0%,100%':{ transform:'rotate(-30deg)'},
        '50%':{transform:'rotate(30deg)'}
        }, 
        drop: {
        '0%':{transform:'scale(0,0)'},
        '100%':{transform:'scale(1,1)'}
        },
        slideDown: {
          '0%':{transform:'-translate-y-0'},
          '100%':{transform:'translate-y-full'}
        },
        bouncy: {
          '0%,100%':{transform:'translateY(0px)'},
          '50%':{transform:'translateY(-10px)'}
        },
        powerUp:{
          '0%':{transform:'scale(0,0)'},
          /*'50%':{transform:'scale(1,0)'},*/
          '100%':{transform:'scale(1,1)'}
        }
      }, 
      animation:{
        wiggle:'wiggle 3s ease-in-out infinite',
        drop: 'drop 2s linear',
        bouncy:'bouncy 1s ease-in-out 3',
        powerUp:'powerUp 1s linear'
      }, 
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14':'14'
      }, 
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14':'14'
      },
      spacing: {
        '1/10':'10%',
        '9/10':'90%',
        '7/10':'70%',
        '1/7': '14%',
        '6/10': '60%',
        '6/3':'200%',
        '3/1':'300%',
        '2.5/1':'250%',
        '3/2':'150%',
        '2/1':'200%',
        '4/1':'400%',
        '4/10':'40%',
        '1/25':'4%',
        '3/10':'30%',
        '15':'15%'
      },
      colors:{
        'deep-orange':'#f58220',
        'daisy':'#fffe7a',
        'avocado-green':'#6ba304',
        'menuGreen':'#a6ce39',
        'forestGreen':'#228b22'
      },
      translate:{
        '1/10':'10%'
      },
      transitionDuration:{
        '3000':'3000ms'
      },
      translate:{
        '6/3':'200%'
      },
      zIndex:{
        '-10':'-10'
      }
    }
  },
  plugins: [],
}
