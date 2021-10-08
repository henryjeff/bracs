import { Icon, Text, TouchableDiv } from "../general";
import colors from "../../constants/Colors";

export interface TeamPreviewProps {
  seed: number;
  name: string;
}

const TeamPreview: React.FC<TeamPreviewProps> = ({ seed, name }) => {
  return (
    <div style={styles.container}>
      <div style={styles.seedContainer}>
        <Text weight="medium" letterSpacing={1}>
          {seed}
        </Text>
      </div>
      <div style={styles.teamContent}>
        <div style={styles.colorPicker}></div>
        <Text>{name}</Text>
      </div>
      <div style={styles.actions}>
        <TouchableDiv>
          <Icon icon="edit" size={12} style={styles.icon} />
        </TouchableDiv>
        <TouchableDiv>
          <Icon icon="menu" size={14} style={styles.icon} />
        </TouchableDiv>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    marginTop: 16,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderColor: colors.navy1,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorPicker: {
    width: 16,
    height: 16,
    borderRadius: 24,
    backgroundColor: colors.gray1,
    marginRight: 12,
  },
  seedContainer: {
    width: 32,
    paddingTop: 12,
    paddingBottom: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: colors.navy1,
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  teamContent: {
    display: "flex",
    flexGrow: 1,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    padding: 12,
  },
};

export default TeamPreview;
