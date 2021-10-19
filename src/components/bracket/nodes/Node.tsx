import { Handle, Position, useStoreState } from "react-flow-renderer";
// import { Text } from "../../general";
import colors from "../../../constants/Colors";
import { AnimatedMountView } from "../../general";

export interface NodeProps {
  outlined?: boolean;
  colorStrip?: string;
}

const Node: React.FC<NodeProps> = ({ outlined, colorStrip, children }) => {
  const nodeStyle = Object.assign(
    {},
    styles.container,
    outlined && styles.containerOutline
  );

  const [, , zoom] = useStoreState((state) => state.transform);
  const showContent = zoom >= 0.3;

  return (
    <AnimatedMountView.Fade styles={styles.outerContainer}>
      <div style={nodeStyle}>
        <Handle
          type="target"
          position={"left" as Position}
          id="l"
          style={styles.handle}
        />
        <div
          style={Object.assign({}, styles.colorStrip, {
            backgroundColor: colorStrip,
          })}
        />
        <div style={styles.content}>
          {showContent ? (
            children
          ) : (
            <div style={styles.placeholderContainer}>
              <div
                style={Object.assign(
                  {},
                  styles.placeholder,
                  outlined && { backgroundColor: colors.navy1 }
                )}
              />
            </div>
          )}
        </div>
        <Handle
          type="source"
          position={"right" as Position}
          id="r"
          style={styles.handle}
        />
      </div>
    </AnimatedMountView.Fade>
  );
};

const styles: StyleSheetCSS = {
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
    // marginLeft: -24,
    minWidth: 256,
    display: "flex",
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: colors.navy1,
    backgroundColor: colors.navy1,
  },
  containerOutline: {
    backgroundColor: colors.navy2,
  },
  colorStrip: {
    width: 10,
    height: 48,
    borderRadius: 16,
    marginRight: 12,
  },
  outerContainer: {
    cursor: "pointer",
    display: "flex",
  },
  placeholderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    height: 12,
    width: 128,
    backgroundColor: colors.gray2,
  },
  content: {
    // justifyContent: "space-between",
    display: "flex",
    // flexDirection: "column",
  },
  handle: {
    top: "50%",
    borderRadius: 0,
    opacity: 0,
  },
};

export default Node;
