export const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 75 + "%";
  const lightness = 70 + "%";
  return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
};
