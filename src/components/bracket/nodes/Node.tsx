import { Handle, Position } from "react-flow-renderer";
// import { Text } from "../../general";
import colors from "../../../constants/Colors";

export interface NodeProps {
  outlined?: boolean;
  colorStrip?: string;
  seed?: number;
}

const Node: React.FC<NodeProps> = ({
  outlined,
  colorStrip,
  seed,
  children,
}) => {
  const nodeStyle = Object.assign(
    {},
    styles.container,
    outlined && styles.containerOutline
    // seed && styles.nodeSeedContainer
  );

  return (
    <div style={styles.outerContainer}>
      {/* {seed && (
        <div style={styles.seedContainer}>
          <Text>{seed}</Text>
        </div>
      )} */}
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
        <div style={styles.content}>{children}</div>
        <Handle
          type="source"
          position={"right" as Position}
          id="r"
          style={styles.handle}
        />
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
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
  nodeSeedContainer: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
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
  seedContainer: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: colors.gray2,
    alignItems: "center",
    width: 18,
    justifyContent: "center",
    display: "flex",
  },
  seedSpacer: {
    width: 18,
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
