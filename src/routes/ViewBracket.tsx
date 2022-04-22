import Bracket from "../components/bracket/Bracket";
import BracketControls from "../components/bracket/BracketControls";
import { AnimatedMountView, Text } from "../components/general";
import { ReactFlowProvider } from "react-flow-renderer";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getBracket } from "../store/actions/BracketActions";
import { useDispatch } from "react-redux";
import { useCurrUser } from "../store/selectors";
import colors from "../constants/Colors";

const BracketRoute: React.FC<{}> = () => {
  const { bracketId } = useParams<{ bracketId: string }>();

  const user = useCurrUser();
  const dispatch = useDispatch();

  useEffect(() => {
    // check if logged in before getting bracket
    if (user) {
      dispatch(getBracket(bracketId));
    }
  }, [user, bracketId, dispatch]);

  return (bracketId && user) || bracketId === "_" ? (
    <div className="bracket-page" style={styles.page}>
      <BracketControls bracketId={bracketId} />
      <AnimatedMountView className="bracket-container" styles={styles.bracket}>
        <ReactFlowProvider>
          {bracketId && <Bracket bracketId={bracketId} />}
        </ReactFlowProvider>
      </AnimatedMountView>
    </div>
  ) : (
    <div style={styles.noAccessPage}>
      <AnimatedMountView styles={styles.header}>
        <div style={styles.logoContainer}>
          <Text weight="bold" fontSize={64}>
            500
          </Text>
        </div>
        <Text fontSize={24} color={colors.gray1} style={{ marginTop: 8 }}>
          You must be logged in to view public brackets
        </Text>
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
  noAccessPage: {
    display: "flex",
    marginTop: 128,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logoContainer: {
    display: "flex",
  },
};

export default BracketRoute;
