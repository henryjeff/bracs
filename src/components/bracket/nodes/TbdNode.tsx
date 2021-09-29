import Node from "./Node";
import { Text } from "../../general";
import colors from "../../../constants/Colors";

export interface TbdNodeProps {}

const TbdNode: React.FC<TbdNodeProps> = () => {
  return (
    <Node colorStrip={colors.gray2}>
      <div style={styles.inlineData}>
        <Text fontSize={20} color={colors.gray1}>
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
  },
};

export default TbdNode;
