import { Handle, Position } from "react-flow-renderer";
import colors from "../../../constants/Colors";

export interface NodeProps {
  outlined?: boolean;
  colorStrip?: string;
}

const Node: React.FC<NodeProps> = ({ outlined, colorStrip, children }) => {
  return (
    <div style={outlined ? styles.containerOutline : styles.container}>
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
  );
};

const styles: StyleSheetCSS = {
  container: {
    padding: 16,
    backgroundColor: colors.navy1,
    display: "flex",
    borderRadius: 16,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: colors.navy1,
    minWidth: 256,
  },
  containerOutline: {
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: colors.navy1,
    backgroundColor: colors.navy2,
    padding: 16,
    display: "flex",
    borderRadius: 16,
    minWidth: 256,
  },
  colorStrip: {
    width: 12,
    height: 48,
    borderRadius: 16,
    marginRight: 12,
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
