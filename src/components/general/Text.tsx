import React from "react";
import colors from "../../constants/Colors";
import { FontStyle, FontWeights } from "../../constants/Styles";

export interface TextProps {
  style?: React.CSSProperties;
  fontSize?: number;
  color?: string;
  weight?: FontWeights;
  verticalPadding?: boolean;
  horizontalPadding?: boolean;
  letterSpacing?: number;
  textWrap?: boolean;
  lineHeight?: number;
  noColor?: boolean;
  noSelect?: boolean;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    fontSize,
    color,
    weight,
    verticalPadding,
    horizontalPadding,
    letterSpacing,
    textWrap,
    lineHeight,
    noColor,
    noSelect,
  } = props;

  const textStyle = Object.assign(
    {},
    styles.text,
    fontSize && { fontSize: fontSize },
    color ? { color: color } : noColor ? {} : { color: colors.white },
    weight && { ...FontStyle[weight] },
    verticalPadding && { ...styles.verticalPadding },
    horizontalPadding && { ...styles.horizontalPadding },
    letterSpacing && { letterSpacing: letterSpacing },
    textWrap && { whiteSpace: "wrap" },
    lineHeight && { lineHeight: lineHeight },
    noSelect && styles.noSelect,
    props.style
  );

  return <p style={textStyle}>{props.children}</p>;
};

const styles: StyleSheetCSS = {
  text: {
    margin: 0,
    fontSize: 14,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    ...FontStyle.regular,
  },
  verticalPadding: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  horizontalPadding: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  noSelect: {
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
  },
};

export default Text;
