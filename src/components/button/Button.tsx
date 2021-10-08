import React, { useState } from "react";
import { FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { Text, LoadingIndicator } from "../general";
import { TextProps } from "../general/Text";

export interface ButtonProps {
  containerStyles?: React.CSSProperties;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
  disabled?: boolean;
  outline?: boolean;
  buttonStyles?: React.CSSProperties;
  buttonHoverStyles?: React.CSSProperties;
  buttonTextProps?: TextProps;
  noPadding?: boolean;
  noMargin?: boolean;
  thin?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  containerStyles,
  isLoading,
  onClick,
  text,
  disabled,
  outline,
  buttonStyles,
  buttonHoverStyles,
  buttonTextProps,
  noPadding,
  noMargin,
  children,
  thin,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    setIsActive(false);
  };

  const onMouseDown = () => {
    setIsActive(true);
  };

  const onMouseUp = () => {
    setIsActive(false);
  };

  const buttonStyle = Object.assign(
    {},
    styles.button,
    outline && styles.outline,
    isHovering && (outline ? styles.hoverOutline : styles.hover),
    isLoading && styles.buttonLoading,
    disabled && (outline ? styles.disabledOutline : styles.disabled),
    buttonStyles,
    isHovering && buttonHoverStyles,
    isActive && (outline ? styles.activeOutline : styles.active),
    noPadding && { paddingLeft: 4, paddingRight: 4 },
    thin && { height: 30, paddingLeft: 20, paddingRight: 20 }
  );

  return (
    <div
      style={Object.assign(
        {},
        styles.container,
        containerStyles,
        noMargin && { margin: 0 }
      )}
    >
      {isLoading ? (
        <button style={buttonStyle}>
          <LoadingIndicator />
        </button>
      ) : (
        <button
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onClick={onClick}
          disabled={disabled}
          style={buttonStyle}
        >
          {text ? (
            <Text fontSize={14} {...buttonTextProps}>
              {text}
            </Text>
          ) : children ? (
            { children }
          ) : (
            <></>
          )}
        </button>
      )}
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    width: "100%",
  },
  button: {
    height: 32,
    backgroundColor: colors.navy1,
    borderWidth: 0,
    borderStyle: "solid",
    borderRadius: 8,
    color: colors.white,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    paddingLeft: 32,
    paddingRight: 32,
    display: "flex",
    outline: "none",
    cursor: "pointer",
    ...FontStyle.medium,
  },
  buttonLoading: {
    paddingLeft: 0,
    paddingRight: 0,
    cursor: "default",
  },
  hover: {
    backgroundColor: `${colors.navy1}d8`,
  },
  active: {
    opacity: 0.5,
  },
  loading: {
    paddingTop: 2,
  },
  disabled: {
    opacity: 0.4,
    cursor: "default",
    backgroundColor: `${colors.navy1}68`,
  },
  disabledOutline: {
    opacity: 0.4,
    cursor: "default",
    borderColor: `${colors.gray1}`,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.gray1,
    color: colors.gray1,
    backgroundColor: "transparent",
  },
  hoverOutline: {
    borderColor: `${colors.white}b8`,
  },
  activeOutline: {
    opacity: 0.5,
  },
};

export default Button;
