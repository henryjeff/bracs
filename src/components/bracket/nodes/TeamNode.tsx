import Node from "./Node";
import { Text } from "../../general";
import colors from "../../../constants/Colors";

export interface TeamNodeProps {
  data: any;
}

const TeamNode: React.FC<TeamNodeProps> = ({ data }) => {
  return (
    <Node colorStrip={data.color}>
      <div style={styles.data}>
        <Text fontSize={20}>{data.text}</Text>
        <Text fontSize={14} color={colors.gray1}>
          {data.wins} W {data.losses} L - 3409 MMR
        </Text>
      </div>
    </Node>
  );
};

const styles: StyleSheetCSS = {
  data: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
};

export default TeamNode;
