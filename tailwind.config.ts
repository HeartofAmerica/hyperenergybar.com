import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1920px',
    },
    extend: {
      container: {
        center: true,
      },
      maxWidth: {
        'screen-xl': '1920px',
      },
      colors: {
        softgray: '#f4f4f4',
        green: '#8bc8b6',
        ltgreen: '#EFF4E1',
        xltgreen: '#F7FAEE',
        darkgreen: '#265B61',
        xdarkgreen: '#1D4F54',
        neon: '#E8FFAF',
        yellow: '#F8D77C',
        red: '#F8D77C',
        pinkpower: '#FFB8B9',
        violetvoltage: '#A5E5F0',
        jetfuel: '#FFBFB5',
        aftershock: '#C3D9FF',
        adrenalinejunkie: '#6FE6ED',
        electricwave: '#A7ECE6',
        cosmiclightning: '#FFD381',
        triplethreat: '#A7F7D2',
        dynamite: '#FFB59F',
        kineticcoconut: '#1EBAE6',
        screamingreen: '#8AEB94',
        solarstrawberry: '#FFB7B9',
        strawberry: '#f4ccd7',
        strawban: '#FFF2C8',
        mango: '#FFDD79',
        peach: '#FFCE8A',
        coffee: '#EBCA9B',
        campfire: '#EBCA9B',
        butterbomber: '#F7E2C5',
        pbclutter: '#B27543',
        caramelcrush: '#F7E2C5',
        rip6: '#EBCA9B',
        forrest: '#416d45',
      },
      fontFamily: {
        obvi: ['obviously', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
