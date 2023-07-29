/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#610bef',
          default_strong: '#4700ab',
          default_weak: '#a996ff',
          bg_strong: '#bfbefc',
          bg: '#f7f7fc'
        },
        grayscale: {
          header: '#14142b',
          header_weak: '#262338',
          body: '#4e4b66',
          label: '#6e7191',
          placehold: '#a0a3bd',
          line: '#d9dbe9',
          input: '#eff0f6',
          bg_weak: '#f7f7fc',
          bg: '#fcfcfc'
        },
        secondary: {
          DEFAULT: '#005bd4',
          default_strong: '#0041ac',
          default_weak: '#50c8fc',
          bg_strong: '#8de9ff',
          bg: '#e3feff'
        },
        success: {
          DEFAULT: '#008a00',
          default_strong: '#067306',
          default_weak: '#a6f787',
          bg_strong: '#cbffae',
          bg: '#eaf9de'
        },
        warning: {
          DEFAULT: '#eaac30',
          default_strong: '#946300',
          default_weak: '#ffdf9a',
          bg_strong: '#ffe6b0',
          bg: '#fff8e9'
        },
        danger: {
          DEFAULT: '#ca024f',
          default_strong: '#9e0038',
          default_weak: '#ff75cb',
          bg_strong: '#ffabe8',
          bg: '#ffecfc'
        }
      }
    }
  },
  plugins: []
};
