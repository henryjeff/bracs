import Node from "./Node";
import { Text, Button, LoadingIndicator } from "../../general";
import colors from "../../../constants/Colors";
import useHover from "../../../hooks/useHover";
import AnimatedMountView from "../../animated/AnimatedMountView";

export interface InProgressNodeProps {}

const InProgressNode: React.FC<InProgressNodeProps> = () => {
  const { isHovering, onHover, onLeave } = useHover();

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Node colorStrip={colors.navy1} outlined>
        <div style={styles.inlineData}>
          {isHovering ? (
            <AnimatedMountView key="start">
              <div style={styles.startGameContainer}>
                <Button text={"Declare Winner"} />
              </div>
            </AnimatedMountView>
          ) : (
            <AnimatedMountView key="inprogress" styles={styles.inlineData}>
              <LoadingIndicator size={16} color={colors.gray1} />
              <Text
                fontSize={18}
                color={colors.gray1}
                style={{ paddingLeft: 12 }}
              >
                In Progress...
              </Text>
            </AnimatedMountView>
          )}
        </div>
      </Node>
    </div>
  );
};

const styles: StyleSheetCSS = {
  inlineData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "red",
  },
};

export default InProgressNode;
