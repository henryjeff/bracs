import { useEffect, useState } from "react";
import Bracket from "../components/bracket/Bracket";
import { convertListToTree } from "../components/bracket/BracketDS";
import { Tree } from "../components/bracket/Tree";

const BracketRoute: React.FC<{}> = () => {
  const [tree, setTree] = useState<Tree<Team>>();
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    const e = convertListToTree([
      { name: "Team 1", color: "#fff" },
      { name: "Team 2", color: "#fff" },
      { name: "Team 3", color: "#fff" },
    ]);
    setTree(e);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     tree?.declareWinner("6");
  //     setCounter(counter + 1);
  //   }, 1000);

  // }, []);

  // useEffect(() => {
  //   if (tree) setTree(tree);
  // }, [tree]);

  return (
    <div style={styles.page}>
      <div style={styles.bracket}>
        {tree && <Bracket tree={tree} forceUpdate={0} />}
      </div>
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
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default BracketRoute;
