import ReactFlow, { Elements } from "react-flow-renderer";
import { useCallback, useState, useRef, useEffect } from "react";
import useLayout from "../../hooks/useLayout";
import TeamNode from "./nodes/TeamNode";
import InProgressNode from "./nodes/InProgressNode";
import TbdNode from "./nodes/TbdNode";
import BuyNode from "./nodes/ByeNode";

import { convertListToElements } from "./BracketDS";

export interface BracketProps {
  elements: Elements<any>;
}

const Bracket: React.FC<BracketProps> = ({ elements }) => {
  const [rfInstance, setRfInstance] = useState();

  const onLoad = useCallback((instance) => {
    instance.fitView();
    setRfInstance(instance);
  }, []);

  const ref = useRef(null);
  const dimensions = useLayout(ref);

  useEffect(() => {
    if (rfInstance) {
      //@ts-ignore
      rfInstance.fitView();
    }
  }, [dimensions, rfInstance]);

  return (
    <div ref={ref} style={styles.container}>
      <ReactFlow
        onLoad={onLoad}
        nodesDraggable={false}
        elements={elements}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    width: "100%",
    height: "100%",
  },
};

const nodeTypes = {
  team: TeamNode,
  inProgress: InProgressNode,
  tbd: TbdNode,
  buy: BuyNode,
};

export default Bracket;
