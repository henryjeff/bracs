import { useEffect, useState } from "react";
import { Elements } from "react-flow-renderer";
import Bracket from "../components/bracket/Bracket";
// import { useParams } from "react-router";
import { convertListToElements } from "../components/bracket/BracketDS";
// import { Text } from "../components/general";

console.log(process.env.API_KEY);

const BracketRoute: React.FC<{}> = () => {
  // const { teams } = useParams<{ teams: Team[] }>();
  const [elements, setElements] = useState<Elements<any>>();

  useEffect(() => {
    const e = convertListToElements([
      { name: "Team 1", color: "#fff" },
      { name: "Team 2", color: "#fff" },
      { name: "Team 3", color: "#fff" },
    ]);
    setElements(e);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.bracket}>
        {elements && <Bracket elements={elements} />}
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
