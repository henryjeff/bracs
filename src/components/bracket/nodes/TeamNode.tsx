import Node from "./Node";
import { Icon, Text } from "../../general";
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
        <Text fontSize={18} weight="medium">
          {data.team.name}
        </Text>
        <div style={styles.ratingContainer}>
          <Icon icon={"rating"} size={14} style={styles.icon} />
          <Text fontSize={14} color={colors.gray1}>
            {data.team.elo ? `${data.team.elo} Rating` : "No Rating"}
          </Text>
        </div>
      </div>
    </Node>
  );
};

const styles: StyleSheetCSS = {
  data: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  ratingContainer: {
    marginTop: 4,
    display: "flex",
  },
  icon: {
    marginTop: 1,
    paddingRight: 4,
  },
};

export default TeamNode;
