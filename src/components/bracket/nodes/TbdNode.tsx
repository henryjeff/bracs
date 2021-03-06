import Node from "./Node";
import { Text } from "../../general";
import colors from "../../../constants/Colors";

export interface TbdNodeProps {}

const TbdNode: React.FC<TbdNodeProps> = () => {
  return (
    <Node colorStrip={colors.navy1} outlined>
      <div style={styles.inlineData}>
        <Text fontSize={18} color={colors.gray1}>
          To be determined...
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

export default TbdNode;
