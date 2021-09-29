import Node from "./Node";
import { Text, LoadingIndicator } from "../../general";
import colors from "../../../constants/Colors";

export interface InProgressNodeProps {}

const InProgressNode: React.FC<InProgressNodeProps> = () => {
  return (
    <Node colorStrip={colors.gray2}>
      <div style={styles.inlineData}>
        <LoadingIndicator size={16} color={colors.gray1} />
        <Text fontSize={20} color={colors.gray1} style={{ paddingLeft: 12 }}>
          In Progress...
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
    // backgroundColor: "red",
  },
};

export default InProgressNode;
