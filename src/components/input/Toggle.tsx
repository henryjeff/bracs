import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import colors from "../../constants/Colors";
import { TouchableDiv } from "../general";

export interface ToggleProps {
  size?: number;
  widthMultiplier?: number;
  onToggleChange?: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  size,
  widthMultiplier,
  onToggleChange,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const _size = size || 16;
  const _widthMultiplier = widthMultiplier || 1;

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle, setToggle]);

  useEffect(() => {
    onToggleChange && onToggleChange(toggle);
  }, [toggle, onToggleChange]);

  const circleVariants = {
    on: { x: _size * _widthMultiplier },
    off: { x: 0 },
  };

  return (
    <div
      style={Object.assign(
        {},
        styles.container,

        { width: _size * 2 * _widthMultiplier, height: _size },
        toggle && { backgroundColor: colors.gray2, borderColor: colors.gray2 }
      )}
    >
      <TouchableDiv onPress={onToggle}>
        <motion.div
          style={Object.assign({}, styles.circle, {
            width: _size,
            height: _size,
          })}
          animate={toggle ? "on" : "off"}
          variants={circleVariants}
        />
      </TouchableDiv>
    </div>
  );
};

const styles: StyleSheetCSS = {
  circle: {
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  container: {
    borderRadius: 100,
    borderColor: colors.gray2,
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: colors.navy2,
  },
};

export default Toggle;
