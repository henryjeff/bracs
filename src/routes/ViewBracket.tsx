import Bracket from "../components/bracket/Bracket";
import BracketControls from "../components/bracket/BracketControls";
import { AnimatedMountView } from "../components/general";
import { ReactFlowProvider } from "react-flow-renderer";
import { useParams } from "react-router";

const BracketRoute: React.FC<{}> = () => {
  const { bracketId } = useParams<{ bracketId: string }>();

  return (
    <div className="bracket-page" style={styles.page}>
      <BracketControls bracketId={bracketId} />
      <AnimatedMountView className="bracket-container" styles={styles.bracket}>
        <ReactFlowProvider>
          {bracketId && <Bracket bracketId={bracketId} />}
        </ReactFlowProvider>
      </AnimatedMountView>
    </div>
  );
};

const styles: StyleSheetCSS = {
  bracket: {
    width: "100%",
  },
  page: {
    flex: 1,
  },
};

export default BracketRoute;
