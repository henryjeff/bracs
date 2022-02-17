const colors = {
  // navy1: "#2A2B33", // navy
  // navy2: "#222127", // darkest navy
  // gray1: "#8E8D95", // lightest gray
  // gray2: "#383A4A",323a45
  navy1: "#252934", // navy
  navy2: "#161a22", // darkest navy
  gray1: "#aeb0b5", // lightest gray
  gray2: "#383A4A",
  white: "#FFFFFF",
  red: "#F4216A",
} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;
