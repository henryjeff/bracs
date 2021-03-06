import React, { useState } from "react";
import { FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { Text, LoadingIndicator, Icon } from "../general";
import { TextProps } from "../general/Text";
import { IconName } from "../../assets/icons";
import { Link } from "react-router-dom";

export interface ButtonProps {
  containerStyles?: React.CSSProperties;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
  icon?: IconName;
  iconSize?: number;
  disabled?: boolean;
  outline?: boolean;
  dark?: boolean;
  buttonStyles?: React.CSSProperties;
  buttonHoverStyles?: React.CSSProperties;
  buttonTextProps?: TextProps;
  padding?: boolean;
  margin?: boolean;
  linkTo?: string;
  thin?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  containerStyles,
  isLoading,
  onClick,
  text,
  icon,
  iconSize,
  disabled,
  outline,
  dark,
  buttonStyles,
  buttonHoverStyles,
  buttonTextProps,
  padding,
  margin,
  linkTo,
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
    padding && { paddingLeft: 4, paddingRight: 4 },
    thin && { height: 30, paddingLeft: 20, paddingRight: 20 },
    dark && { backgroundColor: colors.navy2 }
  );

  const Button = (
    <div
      style={Object.assign(
        {},
        styles.container,
        containerStyles,
        !linkTo && margin && { margin: 4 }
      )}
    >
      {isLoading ? (
        <button style={buttonStyle}>
          <LoadingIndicator size={12} />
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
          {icon && (
            <Icon size={iconSize || 14} icon={icon} style={styles.icon} />
          )}
          {text ? (
            <Text weight="medium" fontSize={14} {...buttonTextProps}>
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
  if (linkTo) {
    return (
      <Link
        style={Object.assign(
          {},
          styles.linkTo,
          containerStyles,
          margin && { margin: 4 }
        )}
        to={linkTo}
      >
        {Button}
      </Link>
    );
  }

  return Button;
};

const styles: StyleSheetCSS = {
  container: {
    width: "100%",
  },
  linkTo: {
    textDecoration: "none",
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
  icon: {
    paddingRight: 8,
  },
};

export default Button;
