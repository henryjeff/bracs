// import { ButtonProps } from '../components/button/Button';
// import colors from '../Colors';
declare interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export type FontWeights = "regular" | "medium" | "bold" | "black";

/*
  Font info:

  400 - Regular
  500 - Medium
  700 - Bold
*/
export const FontStyle: { [key in FontWeights]: StyleSheet } = {
  regular: {
    //@ts-ignore
    fontFamily: "bc-eric-machat, sans-serif",
    //@ts-ignore
    fontWeight: 400,
    //@ts-ignore
    fontStyle: "normal",
  },
  medium: {
    //@ts-ignore
    fontFamily: "bc-eric-machat, sans-serif",
    //@ts-ignore
    fontWeight: 600,
    //@ts-ignore
    fontStyle: "normal",
  },
  bold: {
    //@ts-ignore
    fontFamily: "bc-eric-machat, sans-serif",
    //@ts-ignore
    fontWeight: 700,
    //@ts-ignore
    fontStyle: "normal",
  },
};
