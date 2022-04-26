import Node from "./Node";
import { Icon, Text, AnimatedMountView, Button } from "../../general";
import { useDispatch } from "react-redux";
import colors from "../../../constants/Colors";
import useHover from "../../../hooks/useHover";
import { useCallback } from "react";
import {
  declareMatchWinner,
  updateBracket,
} from "../../../store/actions/BracketActions";
export interface TeamNodeProps {
  data: {
    team: Team;
    bracketData: {
      bracketId: string;
      nodeId: string;
    };
    intractable: boolean;
  };
}

const TeamNode: React.FC<TeamNodeProps> = ({ data }) => {
  const dispatch = useDispatch();

  const declareWinner = useCallback(() => {
    dispatch(
      declareMatchWinner(data.bracketData.nodeId, data.bracketData.bracketId)
    );
    dispatch(updateBracket(data.bracketData.bracketId));
  }, [data.bracketData, dispatch]);

  const { isHovering, onHover, onLeave } = useHover();
  return (
    <div style={styles.container} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Node colorStrip={data.team.color || colors.gray2}>
        <div style={styles.data}>
          {isHovering && data.intractable ? (
            <AnimatedMountView key="start" mountInitialOffset={-16}>
              <div style={styles.startGameContainer}>
                <Button onClick={declareWinner} text={"Declare Winner"} dark />
              </div>
            </AnimatedMountView>
          ) : (
            <AnimatedMountView
              key="inprogress"
              styles={styles.inlineData}
              mountInitialOffset={16}
            >
              <div>
                <Text fontSize={18} weight="medium">
                  {data.team.name}
                </Text>
                <div style={styles.subtextContainer}>
                  {data.team.elo ? (
                    <div style={styles.ratingContainer}>
                      <Icon icon={"rating"} size={14} style={styles.icon} />
                      <Text fontSize={14} color={colors.gray1}>
                        {data.team.elo
                          ? `${data.team.elo} Rating`
                          : "No Rating"}
                      </Text>
                    </div>
                  ) : (
                    data.team.seed && (
                      <div>
                        <Text fontSize={14} color={colors.gray1}>
                          {data.team.seed} seed
                        </Text>
                      </div>
                    )
                  )}
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
  subtextContainer: {
    marginTop: 4,
    display: "flex",
  },
  ratingContainer: {
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
