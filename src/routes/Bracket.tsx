import { useEffect, useState } from "react";
import { Elements } from "react-flow-renderer";
import Bracket from "../components/bracket/Bracket";
import { convertListToElements } from "../components/bracket/BracketDS";

const BracketRoute: React.FC<{}> = () => {
  const [elements, setElements] = useState<Elements<any>>();

  useEffect(() => {
    const e = convertListToElements([
      "Sigma Alpha Epsilon",
      "Pi Lambda Psi",
      "Pi Delta Psi",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default BracketRoute;
