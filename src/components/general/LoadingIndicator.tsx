import React from "react";

import "../../App.css";

export interface LoadingIndicatorProps {
  containerStyles?: React.CSSProperties;
  color?: string;
  circleStyle?: React.CSSProperties;
  size?: number;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  containerStyles,
  color,
  circleStyle,
  size,
}) => {
  const circleStyles = Object.assign(
    {},
    styles.circle,
    circleStyle,
    color && {
      borderTopColor: color,
      borderLeftColor: color,
    },
    size ? { width: size, height: size, borderWidth: (size / 12) * 2.5 } : {}
  );

  return <div id="loading" style={circleStyles}></div>;
};

const styles: StyleSheetCSS = {
  circle: {
    width: 12,
    height: 12,
    marginLeft: 2,
    marginRight: 2,
    // backgroundColor: "white",
  },
};

export default LoadingIndicator;
