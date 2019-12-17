import { black, white, gray, blue, green, orange, purple, red, yellow } from 'primer-colors';

const COLORS = {
  WHITE: "#ffffff",
  BLUE_BIRD_DAY: "#2c7cb0",
  LIGHT_CAMEO_BLUE: "#c7d5e0",
  RIVER_STYX: "#171a21",
  MAYA_BLUE: "#66c0f4",
  ABYSSAL_ANCHORFISH_BLUE: "#1b2838",
  DEEP_DIVE: "#2a475e",
  RIVER_STYX: "#171a21",
  DUSTY_WARRIOR: "#b8b6b4"
}
export const colors = {
  black, white, green, orange, purple, red, yellow, darkVoid: "#0F1719", masterSwordBlue: "#02faed",
  blue: ["#6cccfd", "#468aa1", "#0F1719"],
  gray: ["#676d6d", "#262f2f"]
}

const theme = {
  font: 'stranger, sans-serif',
  colors,
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600
  },
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px'
  },
  borders: [0, '1px solid'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'],
  radii: ['0', '3px', '6px'],
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em'
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
}
export default theme;