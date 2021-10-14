import Node from "./Node";
import { Icon, Text, AnimatedMountView, Button } from "../../general";
import colors from "../../../constants/Colors";
import useHover from "../../../hooks/useHover";
export interface TeamNodeProps {
  data: {
    team: Team;
  };
}

const TeamNode: React.FC<TeamNodeProps> = ({ data }) => {
  const { isHovering, onHover, onLeave } = useHover();
  return (
    <div style={styles.container} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Node colorStrip={data.team.color || colors.gray2} seed={1}>
        <div style={styles.data}>
          {isHovering ? (
            <AnimatedMountView key="start">
              <div style={styles.startGameContainer}>
                <Button text={"Declare Winner"} dark />
              </div>
            </AnimatedMountView>
          ) : (
            <AnimatedMountView key="inprogress" styles={styles.inlineData}>
              <div>
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
            </AnimatedMountView>
          )}
        </div>
      </Node>
    </div>
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
  container: {
    cursor: "pointer",
  },
  overlay: {
    backgroundColor: "#000",
    width: 304,
    borderRadius: 12,
    height: 76,
    position: "absolute",
  },
};

export default TeamNode;
