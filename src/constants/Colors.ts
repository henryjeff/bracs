const colors = {
  navy1: "#2A2B33", // navy
  navy2: "#222127", // darkest navy
  gray1: "#8E8D95", // lightest gray
  gray2: "#383A4A",
  white: "#FFFFFF",
} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;
