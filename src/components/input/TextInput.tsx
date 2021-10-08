import React, { useState, useCallback } from "react";
import { FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { IconName } from "../../assets/icons";
import { Icon, TouchableDiv, AnimatedMountView } from "../general";

export interface TextInputProps {
  containerStyles?: React.CSSProperties;
  icon?: IconName;
  inputType?: string;
  inputStyle?: React.CSSProperties;
  placeholderText?: string;
  value?: string;
  disabled?: boolean;
  filled?: boolean;
  ItemStart?: React.ComponentType;
  showContentToggle?: boolean;
  thin?: boolean;
  squared?: boolean;
  onChangeText:
    | React.Dispatch<React.SetStateAction<string>>
    | ((text: string) => void);
  onFocusChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextInput: React.FC<TextInputProps> = ({
  containerStyles,
  icon,
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
}) => {
  const [showSensitiveContent, setShowSensitiveContent] = useState(false);

  const textInputStyle = Object.assign(
    {},
    styles.input,
    disabled && styles.disabled,
    thin && styles.thin,
    inputStyle
  );

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeText(event.target.value);
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
        filled && styles.filled,
        squared && styles.squared,
        containerStyles
      )}
    >
      {icon ? (
        <div style={styles.iconContainer}>
          <Icon
            style={disabled ? styles.disabledIcon : styles.icon}
            icon={icon}
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
            <AnimatedMountView styles={styles.flex} mountInitialOffset={10}>
              <Icon icon="edit" style={styles.icon} />
            </AnimatedMountView>
          ) : (
            <div style={styles.flex}>
              <AnimatedMountView styles={styles.flex} mountInitialOffset={10}>
                <Icon icon="edit" style={styles.icon} />
              </AnimatedMountView>
            </div>
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
    borderBottomWidth: 2,
    borderColor: colors.gray1,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
  },
  thin: {
    height: 26,
  },
  eyeContainer: {
    paddingLeft: 12,
    paddingRight: 16,
    display: "flex",
  },
  filled: {
    borderWidth: 0,
  },
  iconContainer: {
    paddingLeft: 4,
    paddingRight: 4,
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
    paddingRight: 20,
  },
  flex: {
    display: "flex",
  },
  icon: {
    opacity: 0.8,
    width: 14,
  },
  disabled: {
    cursor: "not-allowed",
    color: colors.white,
  },
  disabledIcon: {
    opacity: 0.3,
    width: 14,
  },
};

export default TextInput;
