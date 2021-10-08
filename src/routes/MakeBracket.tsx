import { Button, TextInput } from "../components/general";
import TeamPreview from "../components/view/TeamPreview";
const MakeBracketRoute: React.FC<{}> = () => {
  const teams = ["Sigma Alpha Epsilon", "Pi Lambda Psi", "Pi Delta Psi"];

  return (
    <div style={{ width: "40%", marginTop: 32 }}>
      <div style={styles.topInput}>
        <TextInput
          icon="circleAdd"
          placeholderText="Enter a new team name"
          onChangeText={() => {}}
        />
        <div style={styles.topInputButtons}>
          <Button text="Add" outline disabled />
          <div style={styles.spacer} />
          <Button text="Start" outline disabled />
        </div>
      </div>
      {teams.map((name, index) => {
        return <TeamPreview name={name} seed={index + 1} />;
      })}
    </div>
  );
};

const styles: StyleSheetCSS = {
  topInput: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 32,
  },
  spacer: {
    width: 24,
  },
  topInputButtons: {
    display: "flex",
    marginLeft: 16,
  },
};

export default MakeBracketRoute;
