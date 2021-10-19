import Bracket from "../components/bracket/Bracket";
import { AnimatedMountView } from "../components/general";
import { useParams } from "react-router";

const BracketRoute: React.FC<{}> = () => {
  const { bracketId } = useParams<{ bracketId: string }>();

  return (
    <div style={styles.page}>
      <AnimatedMountView styles={styles.bracket}>
        {bracketId && <Bracket bracketId={bracketId} />}
      </AnimatedMountView>
    </div>
  );
};

const styles: StyleSheetCSS = {
  bracket: {
    height: "80vh",
    width: "80%",
  },
  page: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default BracketRoute;
