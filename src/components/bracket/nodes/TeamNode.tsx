import Node from "./Node";
import { Text } from "../../general";
import colors from "../../../constants/Colors";

export interface TeamNodeProps {
  data: {
    team: Team;
  };
}

const TeamNode: React.FC<TeamNodeProps> = ({ data }) => {
  return (
    <Node colorStrip={data.team.color || colors.gray2} seed={1}>
      <div style={styles.data}>
        <Text fontSize={18}>{data.team.name}</Text>
        <Text fontSize={14} color={colors.gray1}>
          {data.team.elo ? `${data.team.elo} Rating` : "No Rating"}
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
