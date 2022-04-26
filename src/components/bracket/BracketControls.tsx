import colors from "../../constants/Colors";
import { Button, Icon, Text } from "../general";

import { useBracketSelector, useBracketUpdated } from "../../store/selectors";
import { useEffect, useState } from "react";
import { isValidBracket } from "../../util/isValidBracket";
export interface BracketProps {
  bracketId: string;
}

const BracketControls: React.FC<BracketProps> = ({ bracketId }) => {
  const [totalGames, setTotalGames] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const bracket = useBracketSelector(bracketId);
  const bracketUpdated = useBracketUpdated(bracketId);

  // console.log(bracket);
  useEffect(() => {
    if (isValidBracket(bracket)) {
      // calculate how many games have been played
      let numUnplayed = 0;
      const totalGames = Math.floor(Object.keys(bracket.values).length / 2);
      for (let i = 0; i < Object.keys(bracket.values).length; i++) {
        if (
          bracket.values[i].type === "tbd" ||
          bracket.values[i].type === "inProgress"
        ) {
          numUnplayed++;
        }
      }

      setGamesPlayed(totalGames - numUnplayed);
      setTotalGames(totalGames);
    }
  }, [bracketUpdated, bracket]);

  return (
    <div className="bracket-controls" style={styles.container}>
      <div style={styles.infoContainer}>
        <Text weight="medium" fontSize={24}>
          Information
        </Text>
        <div style={styles.bracketInfo}>
          <div style={styles.bracketInfoRow}>
            <Text>Name</Text>
            <Text color={colors.gray1}>Untitled Bracket</Text>
          </div>
          <div style={styles.bracketInfoRow}>
            <Text>Contestants</Text>
            <div style={styles.infoIconContainer}>
              <Text color={colors.gray1}>4</Text>
              <Icon icon="user" size={12} style={styles.icon} />
            </div>
          </div>
          {gamesPlayed === totalGames && bracket ? (
            <div style={styles.bracketInfoRow}>
              <Text>Bracket Complete</Text>
              <Text color={colors.gray1}>
                {bracket
                  ? (bracket.values[bracket.root] || { value: { name: "" } })
                      .value?.name
                  : ""}{" "}
                won!
              </Text>
            </div>
          ) : (
            <div style={styles.bracketInfoRow}>
              <Text>Progress</Text>
              <Text color={colors.gray1}>
                {gamesPlayed}/{totalGames} Games Played
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    borderColor: colors.navy1,
    borderStyle: "solid",
    borderWidth: 0,
    borderRightWidth: 2,
  },
  infoContainer: {
    backgroundColor: colors.navy1,
    padding: 16,
    borderRadius: 8,
  },
  infoIconContainer: {
    display: "flex",
    alignItems: "center",
  },
  bracketInfo: {
    paddingTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginLeft: 6,
  },
  bracketInfoRow: {
    display: "flex",
    paddingTop: 4,
    paddingBottom: 4,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
};

export default BracketControls;
