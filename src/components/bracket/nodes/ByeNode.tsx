import Node from "./Node";
import { Text } from "../../general";
import colors from "../../../constants/Colors";

export interface ByeNodeProps {}

const ByeNode: React.FC<ByeNodeProps> = () => {
  return (
    <Node colorStrip={colors.navy1} outlined>
      <div style={styles.inlineData}>
        <Text mono fontSize={18} color={colors.gray1}>
          BYE
        </Text>
      </div>
    </Node>
  );
};

const styles: StyleSheetCSS = {
  inlineData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  startGameContainer: {
    display: "flex",
    flex: 1,
  },
};

export default ByeNode;
