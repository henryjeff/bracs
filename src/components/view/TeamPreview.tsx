import { AnimatedMountView, Icon, Text, TouchableDiv } from "../general";
import colors from "../../constants/Colors";
import { generateRandomColor } from "../../util/randomColor";

export interface TeamPreviewProps {
  seed: number;
  name: string;
  elo?: number;
  color?: string;
  onColorChange: (color: string) => void;
  onDelete: () => void;
}

const TeamPreview: React.FC<TeamPreviewProps> = ({
  seed,
  name,
  elo,
  color,
  onColorChange,
  onDelete,
}) => {
  const changeColor = () => {
    onColorChange(generateRandomColor());
  };

  return (
    <div style={styles.container}>
      <div style={styles.seedContainer}>
        <AnimatedMountView delay={0.1} key={seed}>
          <Text weight="medium" letterSpacing={1}>
            {seed}
          </Text>
        </AnimatedMountView>
      </div>
      <div style={styles.teamContent}>
        <TouchableDiv onPress={changeColor}>
          <div
            style={Object.assign({}, styles.colorPicker, {
              backgroundColor: color,
            })}
          />
        </TouchableDiv>
        <Text textWrap={true}>{name}</Text>
      </div>
      {elo && (
        <div style={styles.eloContainer}>
          <Icon size={16} icon="rating" style={styles.eloIcon} />
          <Text>{elo}</Text>
        </div>
      )}
      <div style={styles.actions}>
        <TouchableDiv onPress={onDelete}>
          <Icon icon="circleCross" size={14} style={styles.icon} />
        </TouchableDiv>
        <div>
          <Icon icon="menu" size={14} style={styles.icon} />
        </div>
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
    borderWidth: 0,
    borderLeftWidth: 2,
    borderColor: colors.navy1,
    borderStyle: "solid",
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
    cursor: "default",
  },
  icon: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  eloIcon: {
    paddingRight: 6,
  },
  eloContainer: {
    display: "flex",
    marginRight: 16,
    marginTop: -2,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default TeamPreview;
