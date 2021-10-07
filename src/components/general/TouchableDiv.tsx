import React, { useRef, useState } from "react";

export interface TouchableDivProps {
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const DEBUG = false;

const TouchableDiv: React.FC<TouchableDivProps> = (props) => {
  const { onPress, disabled } = props;

  const debugColor = useRef(Math.floor(Math.random() * 16777215).toString(16));

  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    if (disabled) return;
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    if (disabled) return;
    setIsHovering(false);
    setIsActive(false);
  };

  const onMouseDown = () => {
    if (disabled) return;
    if (onPress) onPress();
    setIsActive(true);
  };

  const onMouseUp = () => {
    if (disabled) return;
    setIsActive(false);
  };

  const divStyle = Object.assign(
    {},
    styles.touchableDiv,
    isHovering ? styles.hover : null,
    isActive ? styles.active : null,
    props.style,
    props.disabled && styles.disabled,
    DEBUG && { backgroundColor: `#${debugColor.current}` }
  );

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={divStyle}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

const styles: StyleSheetCSS = {
  touchableDiv: {
    cursor: "pointer",
  },
  disabled: {
    cursor: "default",
  },
  hover: {
    opacity: 0.8,
  },
  active: { opacity: 0.4 },
};

export default TouchableDiv;
