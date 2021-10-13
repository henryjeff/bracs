import React, { useState, useCallback } from "react";
import { FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { IconName } from "../../assets/icons";
import { Icon, TouchableDiv, AnimatedMountView } from "../general";

export interface TextInputProps {
  containerStyles?: React.CSSProperties;
  icon?: IconName;
  _ref?: React.LegacyRef<HTMLInputElement>;
  inputType?: string;
  iconSize?: number;
  inputStyle?: React.CSSProperties;
  placeholderText?: string;
  value?: string;
  disabled?: boolean;
  filled?: boolean;
  ItemStart?: React.ComponentType;
  showContentToggle?: boolean;
  thin?: boolean;
  squared?: boolean;
  onChangeText?:
    | React.Dispatch<React.SetStateAction<string>>
    | ((text: string) => void);
  onFocusChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextInput: React.FC<TextInputProps> = ({
  containerStyles,
  icon,
  iconSize,
  inputType,
  inputStyle,
  placeholderText,
  value,
  filled,
  disabled,
  ItemStart,
  squared,
  onChangeText,
  onFocusChange,
  showContentToggle,
  thin,
  _ref,
}) => {
  const [showSensitiveContent, setShowSensitiveContent] = useState(false);

  const textInputStyle = Object.assign({}, styles.input, inputStyle);

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeText && onChangeText(event.target.value);
    },
    [onChangeText]
  );

  const onFocus = useCallback(() => {
    onFocusChange && onFocusChange(true);
  }, [onFocusChange]);

  const onBlur = useCallback(() => {
    onFocusChange && onFocusChange(false);
  }, [onFocusChange]);

  const toggleShowContent = useCallback(() => {
    setShowSensitiveContent(!showSensitiveContent);
  }, [showSensitiveContent]);

  return (
    <div
      style={Object.assign(
        {},
        styles.inputContainer,
        thin && styles.thin,
        filled && styles.filled,
        squared && styles.squared,
        disabled && styles.disabled,
        containerStyles
      )}
    >
      {icon ? (
        <div style={styles.iconContainer}>
          <Icon
            style={disabled ? styles.disabledIcon : styles.icon}
            icon={icon}
            size={iconSize}
          />
        </div>
      ) : ItemStart ? (
        <div style={styles.itemStartContainer}>
          <ItemStart />
        </div>
      ) : (
        <div style={styles.startSpacer} />
      )}
      <input
        type={
          showContentToggle && inputType === "password"
            ? showSensitiveContent
              ? "text"
              : "password"
            : inputType
        }
        ref={_ref as React.LegacyRef<HTMLInputElement>}
        style={textInputStyle}
        value={value}
        disabled={disabled}
        onChange={onChangeHandler}
        placeholder={placeholderText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {showContentToggle && (
        <TouchableDiv style={styles.eyeContainer} onPress={toggleShowContent}>
          {showSensitiveContent ? (
            <AnimatedMountView
              styles={styles.flex}
              key={"hide"}
              mountInitialOffset={10}
            >
              <Icon icon="eyeCross" style={styles.icon} />
            </AnimatedMountView>
          ) : (
            <AnimatedMountView
              styles={styles.flex}
              key={"show"}
              mountInitialOffset={10}
            >
              <Icon icon="eye" style={styles.icon} />
            </AnimatedMountView>
          )}
        </TouchableDiv>
      )}
    </div>
  );
};

const styles: StyleSheetCSS = {
  inputContainer: {
    width: "100%",
    borderWidth: 0,
    height: 36,
    borderBottomWidth: 2,
    borderColor: colors.gray2,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
  },
  thin: {
    height: 26,
  },
  eyeContainer: {
    paddingLeft: 12,
    paddingRight: 12,
    display: "flex",
  },
  filled: {
    borderWidth: 0,
  },
  iconContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  itemStartContainer: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  squared: {
    borderRadius: 10,
  },
  input: {
    fontSize: 14,
    ...FontStyle.regular,
    color: colors.white,
    outline: "none",
    borderWidth: 0,
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: colors.navy2,
  },

  startSpacer: {
    paddingRight: 4,
  },
  flex: {
    display: "flex",
  },
  icon: {
    // opacity: 0.8,
    width: 14,
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    color: colors.white,
  },
  disabledIcon: {
    width: 14,
  },
};

export default TextInput;
